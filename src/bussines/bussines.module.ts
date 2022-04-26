import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';
import { NomenclatorModule } from './nomenclator/nomenclator.module';

@Module({
  imports: [CategoryModule, BrandModule, ProductModule, InventoryModule, NomenclatorModule],
})
export class BussinesModule {}
