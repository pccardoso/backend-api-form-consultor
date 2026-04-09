import { Test, TestingModule } from '@nestjs/testing';
import { CauseCategoryService } from './cause_category.service';

describe('CauseCategoryService', () => {
  let service: CauseCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CauseCategoryService],
    }).compile();

    service = module.get<CauseCategoryService>(CauseCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
