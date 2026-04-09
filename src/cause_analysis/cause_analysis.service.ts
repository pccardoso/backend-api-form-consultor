import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CauseAnalysisDto } from './cause_analysis.dto';

@Injectable()
export class CauseAnalysisService {

    constructor(
        private readonly supabaseService: SupabaseService
    ) {}

    async createCauseAnalysis(dataDto: any) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('analises')
            .insert([dataDto])
            .select()
            .single();

        if (error) {
            throw new Error(`Erro ao criar análise de causa: ${error.message}`);
        }

        const idCurrentAnalysis = data.id;

        const pivotData = dataDto.causas_ids.map(causa_id => ({
            causa_id,
            analise_id: idCurrentAnalysis
        }));
        
        const { error: pivotError } = await supabase
            .from('analise_causas')
            .insert(pivotData);

        if (pivotError) {
            throw new Error(`Erro ao criar pivot análise de causa: ${pivotError.message}`);
        }

        //atualizar o status do ticket para analisado pelo líder
        await supabase
            .from('tickets')
            .update({ situacao: 3 })
            .eq('id', dataDto.ticket_id);


        return data;
    }

}
