import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CartDto } from "../dto/Cart.dto";
import { Cart, CartDocument } from "../schema/Cart.schema";
import * as mongoose from 'mongoose';


@Injectable()
export class CartRepository {

    constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) { }

    async create(cartDto: CartDto): Promise<Cart> {

        let newCart = new this.cartModel(CartDto);
        return await newCart.save();
    }

    async findAll(): Promise<Cart[]> {
        return await this.cartModel.find();
    }
    async findOne(id: string): Promise<Cart> {
        return await this.cartModel.findOne({ _id: id })
    }

    async update(cart: CartDto): Promise<Cart> {

        return await this.cartModel.findOneAndUpdate({ _id: cart.id },
            { 
                item: cart.item,
            }, {
            new: true
        })
    }

}