import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { SatisfactionDto } from './satisfaction.dto';

@Injectable()
export class SatisfactionService {

    constructor(
        private readonly supabaseService: SupabaseService
    ) {}

    async validateSatisfactionData(codForm: number): Promise<boolean> {
     
         const supabase = this.supabaseService.getSupabaseService();

         const { data, error } = await supabase
            .from('tickets')
            .select('*, avaliacoes(*)')
            .eq('id', codForm)
            .eq('status', true)
            .single();

        if(!data){
            throw new Error('Formulário não encontrado!');
        }

        if (data.avaliacoes && Object.keys(data.avaliacoes).length > 0) {
            throw new Error('Formulário já avaliado!');
        }

        return true;

    }

    async createSatisfactionData(satisfactionData: SatisfactionDto) {

        const supabase = this.supabaseService.getSupabaseService();

        //Cadastrar uma nova avaliação
        const { data, error } = await supabase
            .from('avaliacoes')
            .insert([satisfactionData])
            .select()
            .single();

        if (error) {
            throw new Error(`Erro ao criar avaliação: ${error.message}`);
        }

        //atualizar o status do ticket para Avaliado Consultor
        const situacaoCurrent = data.nota_atendimento  <= 6 ? 2 : 1;

        await supabase
            .from('tickets')
            .update({ situacao: situacaoCurrent })
            .eq('id', data.ticket_id);

        return data;

    }
}
