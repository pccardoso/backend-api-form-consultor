import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CreatePhaseDto } from './dto/phases.dto';

@Injectable()
export class ScriptConfigPhasesService {

    constructor(private readonly supabaseService: SupabaseService) {}

    async createPhase(createPhaseDto: CreatePhaseDto) {

        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_config_phases')
            .insert(createPhaseDto)
            .select();

        if (error) {
            throw new Error(`Error creating phase: ${error.message}`);
        }

        return data;
    }

    async getPhasesByConfigId(configId: number) {
        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_config_phases')
            .select('*')
            .eq('config_id', configId);

        if (error) {
            throw new Error(`Error fetching phases: ${error.message}`);
        }

        return data;
    }

    async getPhaseById(phaseId: number) {
        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_config_phases')
            .select('*')
            .eq('id', phaseId)
            .single();

        if (error) {
            throw new Error(`Error fetching phase: ${error.message}`);
        }

        return data;
    }

    async updatePhase(phaseId: number, updatePhaseDto: CreatePhaseDto) {
        const supabase = this.supabaseService.getSupabaseService();

        const { data, error } = await supabase
            .from('script_config_phases')
            .update(updatePhaseDto)
            .eq('id', phaseId)
            .select();

        if (error) {
            throw new Error(`Error updating phase: ${error.message}`);
        }

        return data;
    }
}
