import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CauseDto {

    @ApiProperty({ description: 'ID da categoria à qual a causa pertence' })
    @IsNumber()
    categoria_id: number;

    @ApiProperty({ description: 'Nome da causa' })
    @IsString()
    nome: string;

    @ApiProperty({ description: 'Descrição da causa' })
    @IsString()
    @IsOptional()
    descricao?: string;

    @ApiProperty({ description: 'Nível de risco da causa: 0 Baixo, 1 Médio, 2 Alto' })
    @IsNumber()
    risco: number;

    @ApiProperty({ description: 'Status da causa' })
    @IsBoolean()
    @IsOptional()
    status?: boolean;

}