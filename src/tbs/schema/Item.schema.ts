import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document} from "mongoose";
import { ItemCategory } from "./ItemCategory.schema"

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
    id: string
    @Prop({ required: true })
    name: string
    @Prop({required: true })
    price: number
    size: number
    note: string
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ItemCategory' })
    item_category: ItemCategory;
}

export const ItemSchema = SchemaFactory.createForClass(Item);