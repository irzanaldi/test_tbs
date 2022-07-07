import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

export type ItemCategoryDocument = ItemCategory & Document;

@Schema()
export class ItemCategory {
  @Prop()
    id: string
    @Prop({ required: true })
    name: string
}

export const ItemCategorySchema = SchemaFactory.createForClass(ItemCategory);