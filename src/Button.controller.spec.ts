import { Test, TestingModule } from '@nestjs/testing';
import { ButtonController } from './tbs/controller/Button.controller';
import { ButtonDto } from './tbs/dto/Button.dto';
import { ButtonService } from './tbs/service/Button.service';

describe("ButtonController Unit Tests", () => {
  let buttonController: ButtonController;
  let spyService: ButtonService
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ButtonService,
      useFactory: () => ({
        getAll: jest.fn(() => []),
        getButtonById: jest.fn(() => []),
        create: jest.fn(() => { }),
        updateButton: jest.fn(() => { }),
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ButtonController],
      providers: [ButtonService, ApiServiceProvider],
    }).compile();

    buttonController = app.get<ButtonController>(ButtonController);
    spyService = app.get<ButtonService>(ButtonService);
  })

  it("calling create method", () => {
    const dto = new ButtonDto();
    expect(buttonController.createButton(dto)).not.toEqual(null);
  })

  it("calling create method", () => {
    const dto = new ButtonDto();
    buttonController.createButton(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  })

  it("calling getAll method", () => {
    buttonController.getAllButton();
    expect(spyService.getAll).toHaveBeenCalled();
  })

  it("calling find NoteById method", () => {
    const dto = new ButtonDto();
    dto.id = '3789';
    buttonController.getButtonById(dto.id);
    expect(spyService.getButtonById).toHaveBeenCalled();
  })

});