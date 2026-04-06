import { IsNumber, IsOptional, IsString, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateFormDto {
    @IsOptional() // Se você quer que o id seja opcional no create
    @IsNumber()
    id?: number;

    @ApiProperty({ description: 'Nome do consultor associado SGA' })
    @IsString()
    consultor_associado_sga: string;

    @ApiProperty({ description: 'Nome da cooperativa do consultor' })
    @IsString()
    nome_cooperativa_consultor: string;

    @ApiProperty({ description: 'Email do voluntário SGA' })
    @IsEmail()
    email_voluntario_sga: string;

    @ApiProperty({ description: 'Tipo do consultor' })
    @IsString()
    type_consultant: string;

    @ApiProperty({ description: 'Nome do associado SGA' })
    @IsString()
    nome_associado_sga: string;

    @ApiProperty({ description: 'Telefone do associado SGA' })
    @IsString()
    telefone_associado_sga: string;

    @ApiProperty({ description: 'Placa do associado SGA' })
    @IsString()
    plate_associate: string;

    @ApiProperty({ description: 'Modelo do veículo associado SGA' })
    @IsString()
    modelo_associado_sga: string;

    @ApiProperty({ description: 'Tipo de consulta: externo e interno' })
    @IsString()
    cliente_type_consultant: string;

    @ApiProperty({ description: 'Nome do terceiro' })
    @IsString()
    nome_terceiro: string;

    @ApiProperty({ description: 'Telefone do terceiro' })
    @IsString()
    telefone_terceiro: string;

    @ApiProperty({ description: 'Placa do terceiro' })
    @IsString()
    placa_terceiro: string;

    @ApiProperty({ description: 'Descrição da demanda' })
    @IsString()
    description_associate: string;

    @ApiProperty({ description: 'Departamento' })
    @IsString()
    department: string;

    @ApiProperty({ description: 'Tipo de consulta: associado, terceiro, associado e terceiro' })
    @IsString()
    type_request: string;

    @ApiProperty({ description: 'Pesquisa Evogard Edu' })
    @IsString()
    pes_evogard_edu: string;

    @ApiProperty({ description: 'Pesquisa Cliente Resolveu' })
    @IsString()
    pes_cliente_resolveu: string;
}