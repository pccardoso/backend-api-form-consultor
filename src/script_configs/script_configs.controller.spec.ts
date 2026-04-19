import { Test, TestingModule } from '@nestjs/testing';
import { ScriptConfigsController } from './script_configs.controller';
import { ScriptConfigsService } from './script_configs.service';

describe('ScriptConfigsController', () => {
  let controller: ScriptConfigsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScriptConfigsController],
      providers: [ScriptConfigsService],
    }).compile();

    controller = module.get<ScriptConfigsController>(ScriptConfigsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
