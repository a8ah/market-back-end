import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from '../brand/dto';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a product
   * @param dto
   * @returns
   */
  async createProduct(dto: CreateProductDto) {
    try {
      const product = await this.prisma.product.create({
        data: {
          name: dto.name,
          description: dto.description,
          category: {
            connect: { id: dto.category },
          },
        },
      });
      return {
        msg: `Product  succesfuly created `,
        id: product.id,
        name: product.name,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Product name already exist');
        }
      }
      throw error;
    }
  }
}
