import { Controller } from '@nestjs/common';
import { ScriptConfigVariablesService } from './script_config_variables.service';
import { Get, Post, Body, Param } from '@nestjs/common';
import { ScriptVariableDto } from './dto/script.dto';

@Controller('script-config-variables')
export class ScriptConfigVariablesController {
  constructor(private readonly scriptConfigVariablesService: ScriptConfigVariablesService) {}

  @Post()
  async createScriptConfigVariable(@Body() scriptConfigVariableDto: ScriptVariableDto) {
    return this.scriptConfigVariablesService.createScriptConfigVariable(scriptConfigVariableDto);
  }

  @Get('config/:config_id')
  async getVariablesByConfigId(@Param('config_id') config_id: number) {
    return this.scriptConfigVariablesService.getVariablesByConfigId(config_id);
  }

  @Get(':id')
  async getVariablesById(@Param('id') id: number) {
    return this.scriptConfigVariablesService.getVariablesById(id);
  }

  @Get()
  async getAllVariables() {
    return this.scriptConfigVariablesService.getAllVariables();
  }

}
