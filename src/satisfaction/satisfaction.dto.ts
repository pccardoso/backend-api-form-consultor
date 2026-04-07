import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class SatisfactionDto {

    @ApiPropertyOptional({
        description: "ID da avaliação",
        example: 1
    })
    @IsOptional()
    @IsNumber()
    id?: number;

    @ApiProperty({
        description: "ID do ticket relacionado",
        example: 10
    })
    @IsNumber()
    ticket_id: number;

    @ApiProperty({
        description: "Status se o problema foi resolvido",
        example: "sim",
        enum: ["sim", "nao", "parcialmente"]
    })
    @IsString()
    resolvido_status: string;

    @ApiProperty({
        description: "Nota do atendimento de 0 a 10",
        example: 8,
        minimum: 0,
        maximum: 10
    })
    @IsNumber()
    @Min(0)
    @Max(10)
    nota_atendimento: number;

    @ApiPropertyOptional({
        description: "Comentário opcional do cliente",
        example: "Atendimento rápido e eficiente."
    })
    @IsOptional()
    @IsString()
    comentario?: string;

    @ApiPropertyOptional({
        description: "Data de criação da avaliação",
        example: "2026-04-07T10:30:00Z"
    })
    @IsOptional()
    created_at?: Date;

}