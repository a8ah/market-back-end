import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CategoryModule, BrandModule, ProductModule],
})
export class BussinesModule {}
