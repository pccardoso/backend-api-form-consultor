import { Test, TestingModule } from '@nestjs/testing';
import { ScriptConfigPhasesService } from './script_config_phases.service';

describe('ScriptConfigPhasesService', () => {
  let service: ScriptConfigPhasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScriptConfigPhasesService],
    }).compile();

    service = module.get<ScriptConfigPhasesService>(ScriptConfigPhasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
