import { Injectable } from '@nestjs/common';
import { CreateFormDto } from 'src/form/form.dto';

@Injectable()
export class PipefyService {

    async createCard(createFormDto: CreateFormDto) {
        
        try{

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
                    ],
                }),
            });

            console.log('Response from Pipefy:', response.status, await response.text());

        }catch(error){
                console.error('Error creating card in Pipefy:', error);
        }

    }

}
