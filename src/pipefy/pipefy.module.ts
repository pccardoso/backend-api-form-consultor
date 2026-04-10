import { Module } from '@nestjs/common';
import { PipefyService } from './pipefy.service';
import { PipefyController } from './pipefy.controller';

@Module({
  controllers: [PipefyController],
  providers: [PipefyService],
})
export class PipefyModule {}
