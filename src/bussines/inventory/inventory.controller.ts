import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RegisterEntryDto } from './dto';
import { InventoryDto } from './dto/inventory.dto';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  /**
   * Creation of a product
   */
  @Post()
  async registerEntry(@Body() dto: RegisterEntryDto): Promise<any> {
    return this.inventoryService.regiserInventoryEntry(dto);
  }

  @Get()
  obteinProducts(@Body() dto: InventoryDto) {
    // console.log({
    //   category: category,
    //   brand: brand,
    //   product: product,
    // });

    return this.inventoryService.obteinInventory(dto);
  }
}
