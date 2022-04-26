import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a category
   * @param dto
   * @returns
   */
  async createCategory(dto: CreateCategoryDto) {
    try {
      const category = await this.prisma.category.create({
        data: {
          name: dto.name,
          description: dto.description,
        },
      });
      return {
        msg: `Category  succesfuly created `,
        id: category.id,
        name: category.name,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Category name already exist');
        }
      }
      throw error;
    }
  }

  /**
   * Obtein a category by Id
   * @param categoryId
   */
  getCategoryById(categoryId: string) {
    return this.prisma.category.findFirst({
      where: {
        id: categoryId,
      },
    });
  }

  /**
   * Obtein all Categories
   * @returns
   */
  getAllCategory() {
    return this.prisma.category.findMany();
  }

  /**
   * Delete Category By Id
   * @param categoryId
   */
  async deleteCategory(categoryId: string): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }
}
