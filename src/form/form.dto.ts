import { IsNumber, IsOptional, IsString, IsEmail } from "class-validator";

export class CreateFormDto {
    @IsOptional() // Se você quer que o id seja opcional no create
    @IsNumber()
    id?: number;

    @IsString()
    consultor_associado_sga: string;

    @IsString()
    nome_cooperativa_consultor: string;

    @IsEmail()
    email_voluntario_sga: string;

    @IsString()
    type_consultant: string;

    @IsString()
    nome_associado_sga: string;

    @IsString()
    telefone_associado_sga: string;

    @IsString()
    plate_associate: string;

    @IsString()
    modelo_associado_sga: string;

    @IsString()
    cliente_type_consultant: string;

    @IsString()
    nome_terceiro: string;

    @IsString()
    telefone_terceiro: string;

    @IsString()
    placa_terceiro: string;

    @IsString()
    description_associate: string;

    @IsString()
    department: string;
}