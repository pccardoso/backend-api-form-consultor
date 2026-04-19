import { Controller } from '@nestjs/common';
import { ScriptConfigsService } from './script_configs.service';
import { Post, Body, Get, Param } from '@nestjs/common';
import { ScriptDto } from './dto/script.dto';

@Controller('script-configs')
export class ScriptConfigsController {
  constructor(private readonly scriptConfigsService: ScriptConfigsService) {}

  @Post()
  async createScriptConfig(@Body() scriptDto: ScriptDto) {
    return this.scriptConfigsService.createScriptConfig(scriptDto);
  }

  @Get(':id_config')
  async getScriptConfigByPipeId(@Param('id_config') id_config: number) {
    return this.scriptConfigsService.getScriptConfigByPipeId(id_config);
  }

  @Get()
  async getAllScriptConfigs() {
    return this.scriptConfigsService.getAllScriptConfigs();
  }

}
