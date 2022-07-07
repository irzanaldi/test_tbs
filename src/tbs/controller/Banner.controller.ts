import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { BannerDto } from "../dto/Banner.dto";
import { BannerService } from "../service/Banner.service";
import { Banner } from '../schema/Banner.schema';

@Controller('banners')
export class BannerController {


    constructor(private bannerService: BannerService) { }
    @Get()
    @UsePipes(ValidationPipe)
    async getAllBanner(): Promise<Banner[]> {
            return this.bannerService.getAll()
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBanner(@Body() bannerDto: BannerDto): Promise<Banner> {
        return this.bannerService.create(bannerDto)
    }
    @Get('/:id')
    getBannerById(@Param('id') id: string): Promise<Banner> {

        return this.bannerService.getBannerById(id)
    }

    @Put('/:id')
    updateButton(@Param('id') id: string, @Body() bannerDto: BannerDto): Promise<Banner> {
        bannerDto.id = id
        return this.bannerService.updateBanner(bannerDto)
    }
}
