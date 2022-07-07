import { IsNotEmpty} from "class-validator";

export class BannerDto {
    id: string
    @IsNotEmpty()
    title: string
    @IsNotEmpty()
    image: string
    note: string
}