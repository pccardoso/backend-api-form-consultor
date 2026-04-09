import { Test, TestingModule } from '@nestjs/testing';
import { CauseAnalysisController } from './cause_analysis.controller';
import { CauseAnalysisService } from './cause_analysis.service';

describe('CauseAnalysisController', () => {
  let controller: CauseAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CauseAnalysisController],
      providers: [CauseAnalysisService],
    }).compile();

    controller = module.get<CauseAnalysisController>(CauseAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
