import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  /**
   * Creation of a Category
   */
  @Post()
  async createCategory(@Body() dto: CreateCategoryDto): Promise<any> {
    return this.categoryService.createCategory(dto);
  }

  /**
   * Obtain ALL Category
   */
  @Get()
  async obtainCategory(): Promise<any> {
    return this.categoryService.getAllCategory();
  }

  /**
   * Obtain Category By ID
   */
  @Get(':id')
  getCategoryById(@Param('id') categoryId: string) {
    return this.categoryService.getCategoryById(categoryId);
  }

  /**
   * Delete Category
   */
  @Delete(':id')
  deleteCategory(@Param('id') categoryId: string) {
    return this.categoryService.deleteCategory(categoryId);
  }
}
