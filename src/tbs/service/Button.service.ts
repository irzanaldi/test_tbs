import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { ButtonDto } from '../dto/Button.dto';
// import { Messages } from '../Messages.data'; 
import { Button } from '../schema/Button.schema';
import { ButtonRepository } from '../repository/Button.repository';

@Injectable()
export class ButtonService {

    constructor(private buttonRepository: ButtonRepository) { }

    async getAll(): Promise<Button[]> {
        return await this.buttonRepository.findAll();
    }

    async create(buttonDto: ButtonDto): Promise<Button> {
        return await this.buttonRepository.create(buttonDto);
    }

    getButtonById(id: string): Promise<Button> {

        let button = this.buttonRepository.findOne(id)
        return button
    }
    updateButton(buttonDto: ButtonDto): Promise<Button> {

        return this.buttonRepository.update(buttonDto)
    }

    

}
