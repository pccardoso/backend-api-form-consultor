import { Body, Controller, Get, Post } from '@nestjs/common';
import { CauseService } from './cause.service';
import { CauseDto } from './cause.dto';

@Controller('cause')
export class CauseController {
  constructor(private readonly causeService: CauseService) {}

  @Post()
  async createCause(@Body() causeDto: CauseDto) {
    return await this.causeService.createCause(causeDto);
  }

  @Get()
  async getAllCauses() {
    return await this.causeService.getAllCauses();
  }

  @Get('with-categories')
  async getAllCausesWithCategories() {
    return await this.causeService.getAllCausesWithCategories();
  }

}
