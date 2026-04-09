import { Controller, Req, UseGuards } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { CauseAnalysisService } from './cause_analysis.service';
import { CauseAnalysisDto } from './cause_analysis.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('cause-analysis')
export class CauseAnalysisController {
  constructor(private readonly causeAnalysisService: CauseAnalysisService) {}

  @Post()
  async createCauseAnalysis(@Body() dataDto: CauseAnalysisDto, @Req() req) {
    return await this.causeAnalysisService.createCauseAnalysis({
      ...dataDto,
      user_id: req.user.id
    });
  }

}
