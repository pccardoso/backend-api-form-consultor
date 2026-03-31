import { Controller, Get,Post, Body, Param, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get('')
  async getAll() {
    return await this.formService.getAll();
  }

  @Post()
  async createForm(@Body() formData: CreateFormDto) {
    return await this.formService.createForm(formData);
  }

  @Get(':id')
  async getFormById(@Param('id') id: number) {
    return await this.formService.getFormById(id);
  }

  @Delete(':id')
  async deleteForm(@Param('id') id: number) {
    return await this.formService.deleteForm(id);
  }

}
