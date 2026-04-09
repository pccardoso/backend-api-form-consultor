import { Test, TestingModule } from '@nestjs/testing';
import { CauseCategoryController } from './cause_category.controller';
import { CauseCategoryService } from './cause_category.service';

describe('CauseCategoryController', () => {
  let controller: CauseCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CauseCategoryController],
      providers: [CauseCategoryService],
    }).compile();

    controller = module.get<CauseCategoryController>(CauseCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
