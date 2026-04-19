import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { ScriptDto } from './dto/script.dto';

@Injectable()
export class ScriptConfigsService {
    constructor(
        private readonly supabaseService: SupabaseService,
    ) { }

    async createScriptConfig(scriptDto: ScriptDto) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_configs')
            .insert([scriptDto])
            .select()
            .single();

        if (error) {
            throw new Error(`Failed to create script config: ${error.message}`);
        }

        return data;
    }

    async getScriptConfigByPipeId(id_config: number) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_configs')
            .select('*')
            .eq('id', id_config)
            .single();

        if (error) {
            throw new Error(`Failed to get script config: ${error.message}`);
        }

        return data;
    }

    async getAllScriptConfigs() {
        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_configs')
            .select(`
                *,
                script_config_phases (
                    id,
                    phase_name,
                    script,
                    sort_order,
                    active
                )
            `)
            .order('id', { ascending: true })
            .order('sort_order', {
                foreignTable: 'script_config_phases',
                ascending: true,
            });

        if (error) {
            throw new Error(`Failed to get script configs: ${error.message}`);
        }

        return data;
    }

}
