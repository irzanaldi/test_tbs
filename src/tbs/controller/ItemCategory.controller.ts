import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { ItemCategoryDto } from "../dto/ItemCategory.dto";
import { ItemCategoryService } from "../service/ItemCategory.service";
import { ItemCategory } from '../schema/ItemCategory.schema';

@Controller('itemCategorys')
export class ItemCategoryController {


    constructor(private itemCategoryService: ItemCategoryService) { }
    @Get()
    @UsePipes(ValidationPipe)
    async getAllItemCategory(): Promise<ItemCategory[]> {
            return this.itemCategoryService.getAll()
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    createItemCategory(@Body() itemCategoryDto: ItemCategoryDto): Promise<ItemCategory> {
        return this.itemCategoryService.create(itemCategoryDto)
    }
    @Get('/:id')
    getItemCategoryById(@Param('id') id: string): Promise<ItemCategory> {

        return this.itemCategoryService.getItemCategoryById(id)
    }

    @Put('/:id')
    updateItemCategory(@Param('id') id: string, @Body() itemCategoryDto: ItemCategoryDto): Promise<ItemCategory> {
        itemCategoryDto.id = id
        return this.itemCategoryService.updateItemCategory(itemCategoryDto)
    }
}
