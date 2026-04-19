import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePhaseDto {

    @ApiProperty({ description: 'Código da configuração do pipe' })
    @IsNumber()
    @IsNotEmpty()
    config_id: number;

    @ApiProperty({ description: 'Nome da fase' })
    @IsString()
    @IsNotEmpty()
    phase_name: string;

    @ApiProperty({ description: 'Script da fase' })
    @IsString()
    @IsNotEmpty()
    script: string;

}