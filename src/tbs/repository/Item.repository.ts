import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ItemDto } from "../dto/Item.dto";
import { Item, ItemDocument } from "../schema/Item.schema";
import * as mongoose from 'mongoose';
import { ItemSearchDto } from "../dto/ItemSearch.dto";


@Injectable()
export class ItemRepository {

    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) { }

    async create(itemDto: ItemDto): Promise<Item> {

        let newItem = new this.itemModel(itemDto);
        return await newItem.save();
    }

    async findWithFilters(filter: ItemSearchDto) {
      let name = Object.is(filter.name, undefined) ? '' : filter.name
      let price = Object.is(filter.price, undefined) ? '' : filter.price
      return await this.itemModel.find({ $and: [{ price: { $regex: price } }, { firstName: { $regex: name } }] })

    }

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }
    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id })
    }

    async update(item: ItemDto): Promise<Item> {

        return await this.itemModel.findOneAndUpdate({ _id: item.id },
            { 
              name: item.name,
              price: item.price,
              size: item.size,
              note: item.note,
              item_category: item.item_category,
            }, {
            new: true
        })

    }

}