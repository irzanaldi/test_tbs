import { IsNotEmpty} from "class-validator";

export class ItemDto {
    id: string
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    price: number
    @IsNotEmpty()
    size: number
    note: string
    @IsNotEmpty()
    item_category: string
}