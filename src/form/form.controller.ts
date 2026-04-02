import { Controller, Get,Post, Body, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './form.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  
  @ApiOperation({ summary: 'Listar formulários', description: 'Retorna uma lista de todos os formulários' })
  @Get('')
  async getAll(@Req() req: any) {

    const dep = req.user.department || null;

    return await this.formService.getAll(dep);
  }

  @ApiOperation({ summary: 'Criar formulário', description: 'Cria um novo formulário' })
  @Post()
  async createForm(@Body() formData: CreateFormDto) {
    return await this.formService.createForm(formData);
  }

  @ApiOperation({ summary: 'Obter formulário por ID', description: 'Retorna um formulário específico com base no ID' }) 
  @ApiParam({ name: 'id', description: 'ID do formulário', type: Number })
  @Get(':id')
  async getFormById(@Param('id') id: number) {
    return await this.formService.getFormById(id);
  }

  @ApiOperation({ summary: 'Deletar formulário', description: 'Deleta um formulário específico com base no ID' })
  @ApiParam({ name: 'id', description: 'ID do formulário', type: Number })
  @Delete(':id')
  async deleteForm(@Param('id') id: number) {
    return await this.formService.deleteForm(id);
  }

  @ApiOperation({ summary: 'Atualizar formulário', description: 'Atualiza um formulário específico com base no ID' })
  @ApiParam({ name: 'id', description: 'ID do formulário', type: Number })
  @Put(':id')
  async updateForm(@Param('id') id: number, @Body() formData: CreateFormDto) {
    return await this.formService.updateForm(id, formData);
  }

  

}
