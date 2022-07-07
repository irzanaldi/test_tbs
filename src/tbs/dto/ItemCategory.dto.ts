import { IsNotEmpty} from "class-validator";

export class ItemCategoryDto {
    id: string
    @IsNotEmpty()
    name: string
}