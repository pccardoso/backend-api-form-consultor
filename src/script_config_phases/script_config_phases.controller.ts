import { Controller } from '@nestjs/common';
import { ScriptConfigPhasesService } from './script_config_phases.service';
import { CreatePhaseDto } from './dto/phases.dto';
import { Post, Get, Param, Body, Put } from '@nestjs/common';

@Controller('script-config-phases')
export class ScriptConfigPhasesController {
  constructor(private readonly scriptConfigPhasesService: ScriptConfigPhasesService) {}

  @Post()
  async createPhase(@Body() createPhaseDto: CreatePhaseDto) {
    return this.scriptConfigPhasesService.createPhase(createPhaseDto);
  }

  @Get('config/:configId')
  async getPhasesByConfigId(@Param('configId') configId: number) {
    return this.scriptConfigPhasesService.getPhasesByConfigId(configId);
  }

  @Get(':phaseId')
  async getPhaseById(@Param('phaseId') phaseId: number) {
    return this.scriptConfigPhasesService.getPhaseById(phaseId);
  }

  @Put(':phaseId')
  async updatePhase(@Param('phaseId') phaseId: number, @Body() updatePhaseDto: CreatePhaseDto) {
    return this.scriptConfigPhasesService.updatePhase(phaseId, updatePhaseDto);
  }
}
