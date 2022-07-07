import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ItemCategoryDto } from "../dto/ItemCategory.dto";
import { ItemCategory, ItemCategoryDocument } from "../schema/ItemCategory.schema";
import * as mongoose from 'mongoose';


@Injectable()
export class ItemCategoryRepository {

    constructor(@InjectModel(ItemCategory.name) private itemCategoryModel: Model<ItemCategoryDocument>) { }

    async create(itemCategoryDto: ItemCategoryDto): Promise<ItemCategory> {

        let newItemCategory = new this.itemCategoryModel(itemCategoryDto);
        return await newItemCategory.save();
    }

    async findAll(): Promise<ItemCategory[]> {
        return await this.itemCategoryModel.find();
    }
    async findOne(id: string): Promise<ItemCategory> {
        return await this.itemCategoryModel.findOne({ _id: id })
    }

    async update(itemCategory: ItemCategoryDto): Promise<ItemCategory> {

        return await this.itemCategoryModel.findOneAndUpdate({ _id: itemCategory.id },
            { 
              name: ItemCategory.name,
            }, {
            new: true
        })

    }

}