import { Test, TestingModule } from '@nestjs/testing';
import { ScriptConfigsService } from './script_configs.service';

describe('ScriptConfigsService', () => {
  let service: ScriptConfigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScriptConfigsService],
    }).compile();

    service = module.get<ScriptConfigsService>(ScriptConfigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
