import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { BannerDto } from '../dto/Banner.dto';
// import { Messages } from '../Messages.data'; 
import { Banner } from '../schema/Banner.schema';
import { BannerRepository } from '../repository/Banner.repository';

@Injectable()
export class BannerService {

    constructor(private bannerRepository: BannerRepository) { }

    async getAll(): Promise<Banner[]> {
        return await this.bannerRepository.findAll();
    }

    async create(bannerDto: BannerDto): Promise<Banner> {
        return await this.bannerRepository.create(bannerDto);
    }

    getBannerById(id: string): Promise<Banner> {

        let banner = this.bannerRepository.findOne(id)
        return banner
    }
    updateBanner(bannerDto: BannerDto): Promise<Banner> {

        return this.bannerRepository.update(bannerDto)
    }

    

}
