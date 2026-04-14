import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { FormModule } from 'src/form/form.module';

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  imports: [FormModule],
})
export class ReportModule {}
