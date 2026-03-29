
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateFormDto {

    @IsString()
    @IsEmpty()
    id: number;

}