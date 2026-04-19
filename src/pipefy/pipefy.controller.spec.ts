import { Test, TestingModule } from '@nestjs/testing';
import { PipefyController } from './pipefy.controller';

describe('PipefyController', () => {
  let controller: PipefyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipefyController],
    }).compile();

    controller = module.get<PipefyController>(PipefyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
