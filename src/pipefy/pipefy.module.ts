import { Module } from '@nestjs/common';
import { PipefyService } from './pipefy.service';
import { PipefyController } from './pipefy.controller';
import { ScriptConfigsModule } from 'src/script_configs/script_configs.module';
@Module({
    imports: [ScriptConfigsModule],
    providers: [PipefyService],
    exports: [PipefyService],
    controllers: [PipefyController]
})
export class PipefyModule {}
