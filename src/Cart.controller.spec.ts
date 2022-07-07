import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './tbs/controller/Cart.controller';
import { CartDto } from './tbs/dto/Cart.dto';
import { CartService } from './tbs/service/Cart.service';

describe("CartController Unit Tests", () => {
  let cartController: CartController;
  let spyService: CartService
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: CartService,
      useFactory: () => ({
        getAll: jest.fn(() => []),
        getCartById: jest.fn(() => []),
        create: jest.fn(() => { }),
        updateCart: jest.fn(() => { }),
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService, ApiServiceProvider],
    }).compile();

    cartController = app.get<CartController>(CartController);
    spyService = app.get<CartService>(CartService);
  })

  it("calling create method", () => {
    const dto = new CartDto();
    expect(cartController.createCart(dto)).not.toEqual(null);
  })

  it("calling create method", () => {
    const dto = new CartDto();
    cartController.createCart(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  })

  it("calling getAll method", () => {
    cartController.getAllCart();
    expect(spyService.getAll).toHaveBeenCalled();
  })

  it("calling find NoteById method", () => {
    const dto = new CartDto();
    dto.id = '3789';
    cartController.getCartById(dto.id);
    expect(spyService.getCartById).toHaveBeenCalled();
  })

});