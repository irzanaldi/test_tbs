import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

export type ButtonDocument = Button & Document;

@Schema()
export class Button {
  @Prop()
    id: string
    @Prop({ required: true })
    name: string
}

export const ButtonSchema = SchemaFactory.createForClass(Button);