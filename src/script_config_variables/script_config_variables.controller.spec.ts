import { Test, TestingModule } from '@nestjs/testing';
import { ScriptConfigVariablesController } from './script_config_variables.controller';
import { ScriptConfigVariablesService } from './script_config_variables.service';

describe('ScriptConfigVariablesController', () => {
  let controller: ScriptConfigVariablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScriptConfigVariablesController],
      providers: [ScriptConfigVariablesService],
    }).compile();

    controller = module.get<ScriptConfigVariablesController>(ScriptConfigVariablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
