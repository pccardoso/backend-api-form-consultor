import { Test, TestingModule } from '@nestjs/testing';
import { ScriptConfigPhasesController } from './script_config_phases.controller';
import { ScriptConfigPhasesService } from './script_config_phases.service';

describe('ScriptConfigPhasesController', () => {
  let controller: ScriptConfigPhasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScriptConfigPhasesController],
      providers: [ScriptConfigPhasesService],
    }).compile();

    controller = module.get<ScriptConfigPhasesController>(ScriptConfigPhasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
