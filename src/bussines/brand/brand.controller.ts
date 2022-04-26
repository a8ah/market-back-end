import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  /**
   * Creation of a brand
   */
  @Post()
  async createBrand(@Body() dto: CreateBrandDto): Promise<any> {
    console.log('DTO', dto);
    return this.brandService.createBrand(dto);
  }

  /**
   * Obtain ALL Brands
   */
  @Get()
  async obtainBrand(): Promise<any> {
    return this.brandService.getAllBrands();
  }

  /**
   * Obtain brand By ID
   */
  @Get(':id')
  getBrandById(@Param('id') brandId: string) {
    return this.brandService.getBrandById(brandId);
  }

  /**
   * Delete Brand
   */
  @Delete(':id')
  deleteBrand(@Param('id') brandId: string) {
    return this.brandService.deleteBrand(brandId);
  }
}
