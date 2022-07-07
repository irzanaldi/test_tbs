import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { ButtonDto } from "../dto/Button.dto";
import { ButtonService } from "../service/Button.service";
import { Button } from '../schema/Button.schema';

@Controller('buttons')
export class ButtonController {


    constructor(private buttonService: ButtonService) { }
    @Get()
    @UsePipes(ValidationPipe)
    async getAllButton(): Promise<Button[]> {
            return this.buttonService.getAll()
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    createButton(@Body() buttonDto: ButtonDto): Promise<Button> {
        return this.buttonService.create(buttonDto)
    }
    @Get('/:id')
    getButtonById(@Param('id') id: string): Promise<Button> {

        return this.buttonService.getButtonById(id)
    }

    @Put('/:id')
    updateButton(@Param('id') id: string, @Body() buttonDto: ButtonDto): Promise<Button> {
        buttonDto.id = id
        return this.buttonService.updateButton(buttonDto)
    }
}
