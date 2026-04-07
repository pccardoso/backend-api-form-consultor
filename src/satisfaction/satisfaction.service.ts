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

        const { data, error } = await supabase
            .from('avaliacoes')
            .insert([satisfactionData])
            .select()
            .single();

        if (error) {
            throw new Error(`Erro ao criar avaliação: ${error.message}`);
        }

        return data;

    }
}
