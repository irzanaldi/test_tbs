import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './tbs/controller/Item.controller';
import { ItemDto } from './tbs/dto/Item.dto';
import { ItemService } from './tbs/service/Item.service';

describe("ItemController Unit Tests", () => {
  let itemController: ItemController;
  let spyService: ItemService
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ItemService,
      useFactory: () => ({
        getAll: jest.fn(() => []),
        getItemById: jest.fn(() => []),
        create: jest.fn(() => { }),
        updateItem: jest.fn(() => { }),
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [ItemService, ApiServiceProvider],
    }).compile();

    itemController = app.get<ItemController>(ItemController);
    spyService = app.get<ItemService>(ItemService);
  })

  it("calling create method", () => {
    const dto = new ItemDto();
    expect(itemController.createItem(dto)).not.toEqual(null);
  })

  it("calling create method", () => {
    const dto = new ItemDto();
    itemController.createItem(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  })

  it("calling getAll method", () => {
    itemController.getAllItem();
    expect(spyService.getAll).toHaveBeenCalled();
  })

  it("calling find NoteById method", () => {
    const dto = new ItemDto();
    dto.id = '3789';
    itemController.getItemById(dto.id);
    expect(spyService.getItemById).toHaveBeenCalled();
  })

});