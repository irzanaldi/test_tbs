import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { ItemDto } from "../dto/Item.dto";
import { ItemService } from "../service/Item.service";
import { Item } from '../schema/Item.schema';

@Controller('items')
export class ItemController {


    constructor(private itemService: ItemService) { }
    @Get()
    @UsePipes(ValidationPipe)
    async getAllItem(): Promise<Item[]> {
            return this.itemService.getAll()
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    createItem(@Body() itemDto: ItemDto): Promise<Item> {
        return this.itemService.create(itemDto)
    }
    @Get('/:id')
    getItemById(@Param('id') id: string): Promise<Item> {

        return this.itemService.getItemById(id)
    }

    @Put('/:id')
    updateItem(@Param('id') id: string, @Body() itemDto: ItemDto): Promise<Item> {
        itemDto.id = id
        return this.itemService.updateItem(itemDto)
    }
}
