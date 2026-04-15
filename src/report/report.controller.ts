import { Controller, Get, Query } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('causas')
  async getCountCausas(@Query('data_inicio') dataInicio?: string, @Query('data_fim') dataFim?: string) {
    return await this.reportService.getCountCausas(dataInicio, dataFim);
  }

}