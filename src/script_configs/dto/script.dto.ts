import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ScriptDto {

    @ApiProperty({ description: 'Código do pipe' })
    @IsNumber()
    @IsNotEmpty()
    pipe_id: number;

    @ApiProperty({ description: 'Nome do pipe' })
    @IsString()
    @IsNotEmpty()
    pipe_name: string;
}