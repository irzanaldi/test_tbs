import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemDto } from '../dto/Item.dto';
import { Item } from '../schema/Item.schema';
import { ItemRepository } from '../repository/Item.repository';

@Injectable()
export class ItemService {

    constructor(private itemRepository: ItemRepository) { }

    async getAll(): Promise<Item[]> {
        return await this.itemRepository.findAll();
    }

    async create(ItemDto: ItemDto): Promise<Item> {
        return await this.itemRepository.create(ItemDto);
    }

    getItemById(id: string): Promise<Item> {

        let item = this.itemRepository.findOne(id)
        return item
    }
    updateItem(itemDto: ItemDto): Promise<Item> {

        return this.itemRepository.update(itemDto)
    }
}
