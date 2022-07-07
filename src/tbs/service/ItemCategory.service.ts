import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemCategoryDto } from '../dto/ItemCategory.dto';
import { ItemCategory } from '../schema/ItemCategory.schema';
import { ItemCategoryRepository } from '../repository/ItemCategory.repository';

@Injectable()
export class ItemCategoryService {

    constructor(private itemCategoryRepository: ItemCategoryRepository) { }

    async getAll(): Promise<ItemCategory[]> {
        return await this.itemCategoryRepository.findAll();
    }

    async create(ItemCategoryDto: ItemCategoryDto): Promise<ItemCategory> {
        return await this.itemCategoryRepository.create(ItemCategoryDto);
    }

    getItemCategoryById(id: string): Promise<ItemCategory> {

        let itemCategory = this.itemCategoryRepository.findOne(id)
        return itemCategory
    }
    updateItemCategory(itemCategoryDto: ItemCategoryDto): Promise<ItemCategory> {

        return this.itemCategoryRepository.update(itemCategoryDto)
    }
}
