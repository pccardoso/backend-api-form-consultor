import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CauseDto } from './cause.dto';

@Injectable()
export class CauseService {

    constructor(
        private readonly supabaseService: SupabaseService
    ) { }

    async createCause(causeDto: CauseDto) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('causas')
            .insert([causeDto])
            .select()
            .single();

        if (error) {
            throw new Error(`Erro ao criar causa: ${error.message}`);
        }

        return data;
    }

    async getAllCauses() {
        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('causas')
            .select('*');

        if (error) {
            throw new Error(`Erro ao buscar causas: ${error.message}`);
        }

        return data;
    }

    async getAllCausesWithCategories() {
        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
                .from('causa_categorias')
                .select(`
                        *,
                        causas(*)
                `);

        if (error) {
            throw new Error(`Erro ao buscar causas: ${error.message}`);
        }

        return data;
    }

    async updateCause(id: number, causeDto: CauseDto) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('causas')
            .update(causeDto)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            throw new Error(`Erro ao atualizar causa: ${error.message}`);
        }

        return data;
    }



}
