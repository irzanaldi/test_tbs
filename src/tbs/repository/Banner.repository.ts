import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BannerDto } from "../dto/Banner.dto";
import { Banner, BannerDocument } from "../schema/Banner.schema";
import * as mongoose from 'mongoose';


@Injectable()
export class BannerRepository {

    constructor(@InjectModel(Banner.name) private bannerModel: Model<BannerDocument>) { }

    async create(bannerDto: BannerDto): Promise<Banner> {

        let newBanner = new this.bannerModel(bannerDto);
        return await newBanner.save();
    }

    async findAll(): Promise<Banner[]> {
        return await this.bannerModel.find();
    }
    async findOne(id: string): Promise<Banner> {
        return await this.bannerModel.findOne({ _id: id })
    }

    async update(banner: BannerDto): Promise<Banner> {

        return await this.bannerModel.findOneAndUpdate({ _id: banner.id },
            { 
              name: banner.title,
              image: banner.image,
              note: banner.note,
            }, {
            new: true
        })

    }

}