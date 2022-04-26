import { Controller, Get, Param } from '@nestjs/common';
import { NomenclatorService } from './nomenclator.service';

@Controller('nomenclator')
export class NomenclatorController {
  constructor(private nomencatorService: NomenclatorService) {}
  /**
   *
   * @param categoryId
   * @returns
   */
  @Get('category/:id')
  findByCategory(@Param('id') categoryId: string) {
    return this.nomencatorService.listProductByCategory(categoryId);
  }
}
