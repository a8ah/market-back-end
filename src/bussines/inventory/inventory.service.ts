import { ForbiddenException, Injectable, ParseIntPipe } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from '../product/dto';
import { RegisterEntryDto } from './dto';
import { InventoryDto } from './dto/inventory.dto';
import { InventoryResponseDto } from './dto/inventoryResponse.dto';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  /**
   * Regiser inventory entry
   * @param dto
   * @returns
   */
  async regiserInventoryEntry(dto: RegisterEntryDto) {
    try {
      const productBrandHistory = await this.prisma.productBrandHistory.create({
        data: {
          amount: dto.amount,
          brand: {
            connect: { id: dto.brand },
          },
        },
      });
      return {
        msg: `Product  succesfuly created `,
        id: productBrandHistory.id,
        name: productBrandHistory.amount,
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Obtein Products By Category
   * @param categoryId
   * @returns
   */
  async obteinInventory(dto: InventoryDto) {
    const result = await this.prisma.productBrandHistory.groupBy({
      by: ['assignedAt'],
      where: {
        brandId: {
          contains: dto.brand,
        },
        brand: {
          productId: {
            contains: dto.product,
          },
          product: {
            categoryId: {
              contains: dto.category,
            },
          },
        },
      },
      _sum: {
        amount: true,
      },
    });

    const response: [InventoryResponseDto] = [] as any;
    result.forEach((element) => {
      response.push({
        amount: element._sum.amount,
        month: element.assignedAt.toLocaleString('en-us', {
          month: 'short',
          year: 'numeric',
        }),
      });
    });

    return response;
  }
}
