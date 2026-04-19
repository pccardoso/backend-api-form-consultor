import { Module } from '@nestjs/common';
import { ScriptConfigsService } from './script_configs.service';
import { ScriptConfigsController } from './script_configs.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [ScriptConfigsController],
  providers: [ScriptConfigsService],
  exports: [ScriptConfigsService],
})
export class ScriptConfigsModule {}
