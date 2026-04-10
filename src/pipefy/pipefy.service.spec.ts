import { Test, TestingModule } from '@nestjs/testing';
import { PipefyService } from './pipefy.service';

describe('PipefyService', () => {
  let service: PipefyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipefyService],
    }).compile();

    service = module.get<PipefyService>(PipefyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
