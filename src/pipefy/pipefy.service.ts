import { Injectable } from '@nestjs/common';
import { CreateFormDto } from 'src/form/form.dto';
import { SearchCardDto } from './dto/search.card.dto';
import { Logger } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { pipe_relation, ErrorCode } from 'src/config/app';
import { ScriptConfigsService } from 'src/script_configs/script_configs.service';
import { parseScript } from 'src/helpers/parseScript';


@Injectable()
export class PipefyService {

  constructor(
    private readonly scriptConfigsService: ScriptConfigsService
  ) {}

  async createCard(createFormDto: CreateFormDto) {

    const logger = new Logger('PipefyLogger: ');

    logger.log('Creating card in Pipefy with data: ' + JSON.stringify(createFormDto));

    try {

      const response = await fetch('https://integration-pipefy.mundoevogard.com/pipefy/create-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idPipe: 307108442,
          title: createFormDto.nome_associado_sga,
          fields: [
            { field_id: 'teste', field_value: createFormDto.consultor_associado_sga },
            { field_id: 'nome_cooperativa', field_value: createFormDto.nome_cooperativa_consultor },
            { field_id: 'e_mail_consultor', field_value: createFormDto.email_voluntario_sga },
            { field_id: 'tipo_de_consultor', field_value: createFormDto.type_consultant },
            { field_id: 'nome_do_associado', field_value: createFormDto.nome_associado_sga },
            { field_id: 'telefone_do_associado', field_value: createFormDto.telefone_associado_sga },
            { field_id: 'placa_do_associado', field_value: createFormDto.plate_associate },
            { field_id: 'modelo_do_ve_culo', field_value: createFormDto.modelo_associado_sga },
            { field_id: 'tipo_de_solicita_o', field_value: createFormDto.type_request },
            { field_id: 'nome_terceiro', field_value: createFormDto.nome_terceiro },
            { field_id: 'telefone_terceiro', field_value: createFormDto.telefone_terceiro },
            { field_id: 'placa_terceiro', field_value: createFormDto.placa_terceiro },
            { field_id: 'descri_o_da_solicita_o', field_value: createFormDto.description_associate },
            { field_id: 'departamento', field_value: createFormDto.department },
            { field_id: 'c_digo_da_cooperativa', field_value: Number(createFormDto.codigo_cooperativa) },
            { field_id: 'c_digo_do_consultor', field_value: Number(createFormDto.codigo_consultor) }
          ],
        }),
      });

      logger.log('Response from Pipefy:', response.status, await response.text());

    } catch (error) {
      logger.error('Error creating card in Pipefy:', error);
    }

  }

  async getDrives(dataSearch: SearchCardDto) {

    // Buscar os acionamentos pelo departamento de Análise de Sinistros
    const response = await fetch('https://integration-pipefy.mundoevogard.com/pipefy/search-cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idPipe: dataSearch.idPipe,
        field_name: dataSearch.field_name,
        search: dataSearch.search
      }),
    });

    if (response.status === 201) {

      const cards = await response.json();

      // Verificar se a resposta contém um array de cards
      if (!Array.isArray(cards) || cards.length === 0) {
        throw new NotFoundException('Nenhum card encontrado para os critérios de busca fornecidos.')
      }

      // Normalizando os dados dos cards para retornar apenas as informações relevantes
      const cardsValidate = cards.filter(card => !['Pré-desistente', 'Desistente'].includes(card.node.current_phase.name))
        .map(card => ({
          id: card.node.id,
          title: card.node.title,
          current_phase: card.node.current_phase.name,
          model: card.node.fields.find(field => field.name === 'Marca / Modelo do Veículo')?.value || null,
          date: card.node.fields.find(field => field.name === 'Data e Hora do Ocorrido')?.value || null,
          type: card.node.fields.find(field => field.name === 'Tipo Sinistro')?.value || null,
        }));

      const textResult = cardsValidate.reduce((texto, item) => {
return texto +
`
✅ Código: ${item.id}
🚗 Veículo:  ${item.model}
📅 Data de Acionamento: ${item.date}
🚨 Sinistro: ${item.type}
`}, "");

const textoFinal = 
`⚠️ ACIONAMENTOS
▪️ Encontramos os seguintes acionamentos para a placa informada.
▪️ Para continuar, digita o código que deseja acionamento:
${textResult}
`;

      return {
        text: textoFinal,
        cards: cardsValidate
      };

    }


  }

  async getTriggerPhase(idCard:number){

    const statusConnection: any[] = [];
    let nextCard = idCard;

    for(const {idPipe, pipeCurrent, nextConnection} of pipe_relation){

      const response = await fetch(`https://integration-pipefy.mundoevogard.com/pipefy/card/${nextCard}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const dataCard = await response.json();

      statusConnection.push({
        idPipe,
        pipeCurrent,
        nextConnection,
        dataCard
      });

      const idConnection = dataCard?.child_relations[nextConnection]?.cards[0]?.id;

      if (!idConnection) break;

      nextCard = idConnection;

      console.log(`Encontramos uma conexão válida, pipe atual ${pipeCurrent}`);
      
    }

    return statusConnection;

  }

  async generateStatusCard(idCard:number){

    const logger = new Logger('PipefyLogger: ');
  
    const listCard = await this.getTriggerPhase(idCard);

    if(listCard?.length === 0) {
      return "Nenhuma conexão encontrada para esse card.";
    }

    const phaseCurrent = listCard?.[listCard.length - 1];

    console.log(phaseCurrent);

    const fieldCurrentPhase = phaseCurrent.dataCard.fields;

    const listConfigScript = await this.scriptConfigsService.getAllScriptConfigs();

    const configScript = listConfigScript.find(config => config.pipe_id === phaseCurrent.idPipe);

    if(!configScript) {

      throw new NotFoundException({
        "message": "Nenhuma configuração de script encontrada para o departamento.",
        "code": ErrorCode.SCRIPT_CONFIG_NOT_FOUND,
        "data": phaseCurrent
      });

    }

    const phaseConfig = configScript.script_config_phases.find(phase => phase.phase_name === phaseCurrent.dataCard.current_phase.name);

    if(!phaseConfig) {
      
      throw new NotFoundException({
        "message": "Nenhuma configuração de script encontrada para a fase atual do card.",
        "code": ErrorCode.SCRIPT_CONFIG_NOT_FOUND,
        "data": phaseCurrent
      });

    }

    const scriptParsed = parseScript(fieldCurrentPhase, phaseConfig.script);

    if(!scriptParsed) {

        throw new NotFoundException({
          "message": "Nenhum script encontrado para essa fase.",
          "code": ErrorCode.SCRIPT_CONFIG_NOT_FOUND,
          "data": phaseCurrent
        });

    }

    return scriptParsed;

  }

}
