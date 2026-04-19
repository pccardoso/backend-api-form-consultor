import { Controller } from '@nestjs/common';
import { Get, Body, Post, Param } from '@nestjs/common';
import { PipefyService } from './pipefy.service';
import { SearchCardDto } from './dto/search.card.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('pipefy')
export class PipefyController {

    constructor(private readonly pipefyService: PipefyService) {}

    @ApiOperation({
        summary: "Buscar os cards",
        description: "Buscar os cards e suas fases."
    })
    @Post()
    async getDrives(@Body() dataSearch: SearchCardDto) {
        return await this.pipefyService.getDrives(dataSearch);
    }

    @Get('status/:idCard')
    async getTriggerPhase(@Param('idCard') idCard:number){
        return await this.pipefyService.getTriggerPhase(idCard);
    }

    @Get('generate-status/:idCard')
    async generateStatusCard(@Param('idCard') idCard:number){
        return await this.pipefyService.generateStatusCard(idCard);
    }
}
