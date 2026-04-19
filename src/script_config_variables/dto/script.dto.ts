import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ScriptVariableDto {
    
    @ApiProperty({ description: 'ID do script config' })
    @IsNotEmpty()
    @IsNumber()
    config_id: number;

    @ApiProperty({ description: 'Nome do campo no pipefy' })
    @IsNotEmpty()
    @IsString()
    field_name: string;

    @ApiProperty({ description: 'Apresentação do campo' })
    @IsNotEmpty()
    @IsString()
    label: string;

}