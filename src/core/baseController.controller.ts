import { Controller, Post } from '@nestjs/common';
import { BaseService } from './baseService.service';

export class baseController {
  constructor(private baseService: BaseService) {}

  @Post()
  add() {
    return null;
  }
}
