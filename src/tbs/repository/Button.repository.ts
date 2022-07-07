import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ButtonDto } from "../dto/Button.dto";
import { Button, ButtonDocument } from "../schema/Button.schema";
import * as mongoose from 'mongoose';


@Injectable()
export class ButtonRepository {

    constructor(@InjectModel(Button.name) private buttonModel: Model<ButtonDocument>) { }

    async create(buttonDto: ButtonDto): Promise<Button> {

        let newButton = new this.buttonModel(buttonDto);
        return await newButton.save();
    }

    async findAll(): Promise<Button[]> {
        return await this.buttonModel.find();
    }
    async findOne(id: string): Promise<Button> {
        return await this.buttonModel.findOne({ _id: id })
    }

    async update(button: ButtonDto): Promise<Button> {

        return await this.buttonModel.findOneAndUpdate({ _id: button.id },
            { 
                name: button.name,
            }, {
            new: true
        })

    }

}