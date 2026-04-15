import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  imports: [SupabaseModule],
})
export class ReportModule {}
