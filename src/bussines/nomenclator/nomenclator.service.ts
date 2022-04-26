import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NomenclatorService {
  constructor(private prisma: PrismaService) {}

  /**
   * Obtein Products By Category
   * @param categoryId
   * @returns
   */
  listProductByCategory(categoryId: string) {
    return this.prisma.product.findMany({
      where: {
        categoryId: categoryId,
      },
      include: {
        brands: true,
      },
    });
  }
}
