import { ProductsService } from './products.service';
import { Test, TestingModule } from '@nestjs/testing';
import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasketService, ProductsService],
    }).compile();

    service = module.get<BasketService>(BasketService);
  });

  it('should calculate a basket total', () => {
    expect(
      service.calculate([
        {
          sku: 'product-1',
          quantity: 2,
        },
        {
          sku: 'product-2',
          quantity: 3,
        },
      ]),
    ).toEqual(471);
  });
});
