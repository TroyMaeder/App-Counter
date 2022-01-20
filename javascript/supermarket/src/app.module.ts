import { BasketService } from './basket.service';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';

@Module({
  controllers: [ProductsController, BasketController],
  providers: [ProductsService, BasketService],
})
export class AppModule {}
