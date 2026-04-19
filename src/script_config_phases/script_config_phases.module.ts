import { Module } from '@nestjs/common';
import { ScriptConfigPhasesService } from './script_config_phases.service';
import { ScriptConfigPhasesController } from './script_config_phases.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [ScriptConfigPhasesController],
  providers: [ScriptConfigPhasesService],
})
export class ScriptConfigPhasesModule {}
