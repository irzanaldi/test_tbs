import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { CartDto } from '../dto/Cart.dto';
// import { Messages } from '../Messages.data'; 
import { Cart } from '../schema/Cart.schema';
import { CartRepository } from '../repository/Cart.repository';

@Injectable()
export class CartService {

    constructor(private cartRepository: CartRepository) { }

    async getAll(): Promise<Cart[]> {
        return await this.cartRepository.findAll();
    }

    async create(CartDto: CartDto): Promise<Cart> {
        return await this.cartRepository.create(CartDto);
    }

    getCartById(id: string): Promise<Cart> {

        let Cart = this.cartRepository.findOne(id)
        return Cart
    }
    updateCart(CartDto: CartDto): Promise<Cart> {

        return this.cartRepository.update(CartDto)
    }

    

}
