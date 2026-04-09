import { Test, TestingModule } from '@nestjs/testing';
import { CauseAnalysisService } from './cause_analysis.service';

describe('CauseAnalysisService', () => {
  let service: CauseAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CauseAnalysisService],
    }).compile();

    service = module.get<CauseAnalysisService>(CauseAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
