import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document} from "mongoose";
import { Item } from "./Item.schema"

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop()
    id: string
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Item' })
    item: [Item];
}

export const ItemSchema = SchemaFactory.createForClass(Item);