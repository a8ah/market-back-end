import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './categoty.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
