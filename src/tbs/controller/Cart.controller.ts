import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { CartDto } from "../dto/Cart.dto";
import { CartService } from "../service/Cart.service";
import { Cart } from '../schema/Cart.schema';

@Controller('Carts')
export class CartController {


    constructor(private cartService: CartService) { }
    @Get()
    @UsePipes(ValidationPipe)
    async getAllCart(): Promise<Cart[]> {
            return this.cartService.getAll()
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCart(@Body() cartDto: CartDto): Promise<Cart> {
        return this.cartService.create(cartDto)
    }
    @Get('/:id')
    getCartById(@Param('id') id: string): Promise<Cart> {

        return this.cartService.getCartById(id)
    }

    @Put('/:id')
    updateCart(@Param('id') id: string, @Body() cartDto: CartDto): Promise<Cart> {
        cartDto.id = id
        return this.cartService.updateCart(cartDto)
    }
}
