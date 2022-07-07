import { IsNotEmpty} from "class-validator";

export class ButtonDto {
    id: string
    @IsNotEmpty()
    name: string
}