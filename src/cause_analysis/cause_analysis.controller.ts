import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { CauseAnalysisService } from './cause_analysis.service';
import { CauseAnalysisDto } from './cause_analysis.dto';

@Controller('cause-analysis')
export class CauseAnalysisController {
  constructor(private readonly causeAnalysisService: CauseAnalysisService) {}

  @Post()
  async createCauseAnalysis(@Body() dataDto: CauseAnalysisDto) {
    return await this.causeAnalysisService.createCauseAnalysis(dataDto);
  }

}
