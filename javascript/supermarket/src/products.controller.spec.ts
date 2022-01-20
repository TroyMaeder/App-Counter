import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  const products = [
    { id: 'product1', name: 'Product1' },
    { id: 'product2', name: 'Product2' },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    })
      .overrideProvider(ProductsService)
      .useValue({
        findAll: () => products,
      })
      .compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should return a list of products', () => {
    expect(controller.findAll()).toEqual({ products });
  });
});
