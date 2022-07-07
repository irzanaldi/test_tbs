import { Test, TestingModule } from '@nestjs/testing';
import { BannerDto } from './tbs/dto/Banner.dto';
import { BannerService } from './tbs/service/Banner.service';
import { BannerController } from './tbs/controller/Banner.controller';

describe("BannerController Unit Tests", () => {
  let bannerController: BannerController;
  let spyService: BannerService
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: BannerService,
      useFactory: () => ({
        getAll: jest.fn(() => []),
        getBannerById: jest.fn(() => []),
        create: jest.fn(() => { }),
        updateBanner: jest.fn(() => { }),
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BannerController],
      providers: [BannerService, ApiServiceProvider],
    }).compile();

    bannerController = app.get<BannerController>(BannerController);
    spyService = app.get<BannerService>(BannerService);
  })

  it("calling create method", () => {
    const dto = new BannerDto();
    expect(bannerController.createBanner(dto)).not.toEqual(null);
  })

  it("calling create method", () => {
    const dto = new BannerDto();
    bannerController.createBanner(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  })

  it("calling getAll method", () => {
    bannerController.getAllBanner();
    expect(spyService.getAll).toHaveBeenCalled();
  })

  it("calling find NoteById method", () => {
    const dto = new BannerDto();
    dto.id = '3789';
    bannerController.getBannerById(dto.id);
    expect(spyService.getBannerById).toHaveBeenCalled();
  })

});