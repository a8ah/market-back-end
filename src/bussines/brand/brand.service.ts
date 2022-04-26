import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a brand
   * @param dto
   * @returns
   */
  async createBrand(dto: CreateBrandDto) {
    try {
      const brand = await this.prisma.brand.create({
        data: {
          name: dto.name,
          description: dto.description,
          product: {
            connect: { id: dto.product },
          },
        },
      });
      return {
        msg: `Brand  succesfuly created `,
        id: brand.id,
        name: brand.name,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Band name already exist');
        }
      }
      throw error;
    }
  }

  /**
   * Obtein a brand by Id
   * @param brandId
   */
  getBrandById(brandId: string) {
    return this.prisma.brand.findFirst({
      where: {
        id: brandId,
      },
    });
  }

  /**
   * Obtein all Brands
   * @returns
   */
  getAllBrands() {
    return this.prisma.brand.findMany();
  }

  /**
   * Delete Brand By Id
   * @param brandId
   */
  async deleteBrand(brandId: string): Promise<void> {
    await this.prisma.brand.delete({
      where: {
        id: brandId,
      },
    });
  }
}
