import { Module } from '@nestjs/common';
import { CauseAnalysisService } from './cause_analysis.service';
import { CauseAnalysisController } from './cause_analysis.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [CauseAnalysisController],
  providers: [CauseAnalysisService],
})
export class CauseAnalysisModule {}
