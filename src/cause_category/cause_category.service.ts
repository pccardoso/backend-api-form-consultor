import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CauseCategoryDto } from './cause_category.dto';

@Injectable()
export class CauseCategoryService {

    constructor(

        private readonly supabaseService: SupabaseService

    ) {}

    async createCauseCategory(dataDto: CauseCategoryDto) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('causa_categorias')
            .insert([dataDto])
            .select()
            .single();

        if (error) {
            throw new Error(`Erro ao criar categoria de causa: ${error.message}`);
        }

        return data;
    }

    async getAllCauseCategories() {
        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('causa_categorias')
            .select('*');

        if (error) {
            throw new Error(`Erro ao buscar categorias de causas: ${error.message}`);
        }

        return data;
    }

}
