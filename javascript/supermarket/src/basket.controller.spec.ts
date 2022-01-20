import { Test, TestingModule } from '@nestjs/testing';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';

describe('BasketController', () => {
  let controller: BasketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasketController],
      providers: [BasketService],
    })
      .overrideProvider(BasketService)
      .useValue({
        calculate: () => 124,
      })
      .compile();

    controller = module.get<BasketController>(BasketController);
  });

  it('should calculate baskets', () => {
    expect(
      controller.calculate([
        {
          sku: 'something',
          quantity: 2,
        },
      ]),
    ).toEqual({
      totalBeforeDiscounts: 124,
      discounts: 0,
      grandTotal: 124,
    });
  });
});
