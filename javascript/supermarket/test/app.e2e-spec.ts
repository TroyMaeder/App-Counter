import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Supermarket (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect({
        products: [
          { sku: 'product-1', name: 'Soda can', price: 123 },
          {
            sku: 'product-2',
            name: 'Potato bag',
            price: 75,
          },
          {
            sku: 'product-3',
            name: 'Sauce bucket',
            price: 50,
          },
        ],
      });
  });

  it('/basket (PUT)', () => {
    return request(app.getHttpServer())
      .put('/basket')
      .send([{ sku: 'product-1', quantity: 2 }])
      .expect(200)
      .expect({
        totalBeforeDiscounts: 246,
        discounts: 0,
        grandTotal: 246,
      });
  });
});
