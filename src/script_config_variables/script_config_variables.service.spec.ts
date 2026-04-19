import { Test, TestingModule } from '@nestjs/testing';
import { ScriptConfigVariablesService } from './script_config_variables.service';

describe('ScriptConfigVariablesService', () => {
  let service: ScriptConfigVariablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScriptConfigVariablesService],
    }).compile();

    service = module.get<ScriptConfigVariablesService>(ScriptConfigVariablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
