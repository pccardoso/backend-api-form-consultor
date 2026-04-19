import { Module } from '@nestjs/common';
import { ScriptConfigVariablesService } from './script_config_variables.service';
import { ScriptConfigVariablesController } from './script_config_variables.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  controllers: [ScriptConfigVariablesController],
  providers: [ScriptConfigVariablesService],
  imports: [SupabaseModule],
})
export class ScriptConfigVariablesModule {}
