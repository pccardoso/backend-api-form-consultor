import { Body, Controller, Get, Post } from '@nestjs/common';
import { CauseCategoryService } from './cause_category.service';
import { CauseCategoryDto } from './cause_category.dto';

@Controller('cause-category')
export class CauseCategoryController {
  constructor(private readonly causeCategoryService: CauseCategoryService) {}

  @Post()
  async createCauseCategory(@Body() dataDto: CauseCategoryDto) {
    return await this.causeCategoryService.createCauseCategory(dataDto);
  }

  @Get()
  async getAllCauseCategories() {
    return await this.causeCategoryService.getAllCauseCategories();
  }

}
