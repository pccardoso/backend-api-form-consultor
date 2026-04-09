import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
  IsNumber,
  IsArray,
  ArrayNotEmpty
} from 'class-validator';

export class CauseAnalysisDto {

  @IsNumber()
  ticket_id: number;

  @IsBoolean()
  p1_concorda: boolean;

  @IsOptional()
  @IsString()
  p2_justificativa?: string;

  @IsBoolean()
  p3_conformidade: boolean;

  @IsOptional()
  @IsNumber()
  p4_numero_nc?: number;

  @IsOptional()
  @IsString()
  parecer?: string;

  // 🔥 CAUSAS (pivot)
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  causas_ids: number[];
}