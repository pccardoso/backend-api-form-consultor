import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SatisfactionService } from './satisfaction.service';
import { SatisfactionDto } from './satisfaction.dto';

@Controller('satisfaction')
export class SatisfactionController {
  constructor(private readonly satisfactionService: SatisfactionService) {}

  @Get('validate/:codForm')
  async validateSatisfactionData(@Param('codForm') codForm: number) {
    return this.satisfactionService.validateSatisfactionData(codForm);
  }

  @Post()
  async createSatisfactionData(
    @Body() satisfactionData: SatisfactionDto,
  ) {
    return this.satisfactionService.createSatisfactionData(satisfactionData);
  } 

}
