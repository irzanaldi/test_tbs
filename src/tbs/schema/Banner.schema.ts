import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

export type BannerDocument = Banner & Document;

@Schema()
export class Banner {
  @Prop()
    id: string
    @Prop({ required: true })
    title: string
    @Prop({ required: true })
    image: string
    note: string
}

export const BannerSchema = SchemaFactory.createForClass(Banner);