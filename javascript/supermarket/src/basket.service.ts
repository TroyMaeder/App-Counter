import { Injectable } from '@nestjs/common';
import { ProductsService } from './products.service';
import { BasketItemDto } from './dto/basketItem.dto';

@Injectable()
export class BasketService {
  constructor(private productsService: ProductsService) {}

  calculate(basket: BasketItemDto[]) {
    return basket.reduce(
      (total: number, { sku, quantity }: BasketItemDto) =>
        total + this.productsService.findOne(sku).price * quantity,
      0,
    );
  }
}
