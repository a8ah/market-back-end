import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  /**
   * Creation of a product
   */
  @Post()
  async createBrand(@Body() dto: CreateProductDto): Promise<any> {
    return this.productService.createProduct(dto);
  }
}
