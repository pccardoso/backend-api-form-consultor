import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CauseCategoryDto {
    
    @IsOptional() // Se você quer que o id seja opcional no create
    @IsNumber()
    id?: number;

    @ApiProperty({ description: 'Nome da categoria da causa' })
    @IsString()
    nome: string;

    @ApiProperty({ description: 'Status da Categoria' })
    @IsBoolean()
    @IsOptional()
    status?: boolean;

}