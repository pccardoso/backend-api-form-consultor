import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CreateFormDto } from './form.dto';

@Injectable()
export class FormService {

    constructor(
        private supabaseService: SupabaseService
    ) {}

    async getAll(): Promise<any[]>{

        const instancSupabase = this.supabaseService.getSupabaseService();

        const {data, error} = await instancSupabase.from('tickets').select();

        if(error) {
            console.error('Error fetching forms:', error);
            throw new Error('Failed to fetch forms');
        }

        return data;

    }

    async createForm(formData: CreateFormDto) {

        const instancSupabase = this.supabaseService.getSupabaseService();

        const {data, error} = await instancSupabase.from('tickets').insert([formData]).select();

        if(error) {
            console.error('Error creating form:', error);
            throw new Error('Failed to create form');
        }

        return data;

    }

    async getFormById(id: number) {

        const instancSupabase = this.supabaseService.getSupabaseService();  

        const {data, error} = await instancSupabase.from('tickets').select().eq('id', id).single();

        if(error) {
            console.error('Error fetching form by id:', error);
            throw new Error('Failed to fetch form by id');
        }

        return data;

    }

    async deleteForm(id: number) {

        const instancSupabase = this.supabaseService.getSupabaseService();

        const {data, error} = await instancSupabase.from('tickets').delete().eq('id', id);

        if(error) {
            console.error('Error deleting form:', error);
            throw new Error('Failed to delete form');
        }

        return data;

    }

}
