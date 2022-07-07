import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartController } from './tbs/controller/Cart.controller';
import { CartService } from './tbs/service/Cart.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

// describe('CartController', () => {
//   let cartController: CartController;

//   beforeEach(async () => {
//     const Cart: TestingModule = await Test.createTestingModule({
//       controllers: [CartController],
//       providers: [CartService],
//     }).compile();

//     cartController = Cart.get<CartController>(CartController);
//   });

//   describe('calling create method', () => {
//     it('should return "Hello World!"', () => {
//       expect(cartController.getAllCart()).toBe([]);
//     });
//   });
// });
