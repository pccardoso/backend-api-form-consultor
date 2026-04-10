import { Controller, Param } from '@nestjs/common';
import { PipefyService } from './pipefy.service';
import { Get } from '@nestjs/common';

@Controller('pipefy')
export class PipefyController {
  constructor(private readonly pipefyService: PipefyService) {}

  @Get('cards/:idPipe')
  async getCards(@Param('idPipe') idPipe: number) {
    return this.pipefyService.getCards(idPipe);
  }

  @Get('search-cards/:idPipe/:plate')
  async searchCardsByPlate(
    @Param('idPipe') idPipe: number,
    @Param('plate') plate: string,
  ) {
    return this.pipefyService.searchCardsByPlate(idPipe, plate);
  } 
  
}
