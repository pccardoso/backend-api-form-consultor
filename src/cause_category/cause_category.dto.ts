import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CauseCategoryDto {
    
    @IsOptional() // Se você quer que o id seja opcional no create
    @IsNumber()
    id?: number;

    @ApiProperty({ description: 'Nome da categoria da causa' })
    @IsString()
    nome: string;

}