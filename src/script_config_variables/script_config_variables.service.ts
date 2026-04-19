import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { ScriptVariableDto } from './dto/script.dto';

@Injectable()
export class ScriptConfigVariablesService {
    constructor(private readonly supabaseService: SupabaseService) {}

    async createScriptConfigVariable(scriptConfigVariableDto: ScriptVariableDto) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_config_variables')
            .insert([scriptConfigVariableDto])
            .select()
            .single();

        if (error) {
            throw new Error(`Failed to create script config variable: ${error.message}`);
        }

        return data;
    }

    async getVariablesByConfigId(config_id: number) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_config_variables')
            .select('*')
            .eq('config_id', config_id);

        if (error) {
            throw new Error(`Failed to get script config variables: ${error.message}`);
        }

        return data;
    }

    async getVariablesById(id: number) {

        const supabase = this.supabaseService.getSupabaseService(); 

        const { data, error } = await supabase
            .from('script_config_variables')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            throw new Error(`Failed to get script config variable: ${error.message}`);
        }

        return data;
    }

    async getAllVariables() {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_config_variables')
            .select('*');

        if (error) {
            throw new Error(`Failed to get script config variables: ${error.message}`);
        }

        return data;
    }
}
