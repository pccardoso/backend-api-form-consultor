import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchCardDto {

    @ApiProperty({ description: 'ID do pipe onde os cards estão localizados', type: [String] })
    @IsNotEmpty()
    @IsNumber()
    idPipe: number;

    @ApiProperty({ description: 'Nome do campo a ser pesquisado' })
    @IsNotEmpty()
    @IsString()
    field_name: string;

    @ApiProperty({ description: 'Valor a ser pesquisado no campo especificado' })
    @IsNotEmpty()
    @IsString()
    search: string;

}