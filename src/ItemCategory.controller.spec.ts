import { Test, TestingModule } from '@nestjs/testing';
import { ItemCategoryController } from './tbs/controller/ItemCategory.controller';
import { ItemCategoryDto } from './tbs/dto/ItemCategory.dto';
import { ItemCategoryService } from './tbs/service/ItemCategory.service';

describe("ItemCategoryController Unit Tests", () => {
  let itemCategoryController: ItemCategoryController;
  let spyService: ItemCategoryService
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ItemCategoryService,
      useFactory: () => ({
        getAll: jest.fn(() => []),
        getItemCategoryById: jest.fn(() => []),
        create: jest.fn(() => { }),
        updateItemCategory: jest.fn(() => { }),
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemCategoryController],
      providers: [ItemCategoryService, ApiServiceProvider],
    }).compile();

    itemCategoryController = app.get<ItemCategoryController>(ItemCategoryController);
    spyService = app.get<ItemCategoryService>(ItemCategoryService);
  })

  it("calling create method", () => {
    const dto = new ItemCategoryDto();
    expect(itemCategoryController.createItemCategory(dto)).not.toEqual(null);
  })

  it("calling create method", () => {
    const dto = new ItemCategoryDto();
    itemCategoryController.createItemCategory(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  })

  it("calling getAll method", () => {
    itemCategoryController.getAllItemCategory();
    expect(spyService.getAll).toHaveBeenCalled();
  })

  it("calling find NoteById method", () => {
    const dto = new ItemCategoryDto();
    dto.id = '3789';
    itemCategoryController.getItemCategoryById(dto.id);
    expect(spyService.getItemCategoryById).toHaveBeenCalled();
  })

});