import { Module } from '@nestjs/common';
import { PipefyService } from './pipefy.service';
@Module({
    providers: [PipefyService],
    exports: [PipefyService]
})
export class PipefyModule {}
