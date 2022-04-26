import { Type, Transform } from 'class-transformer';

export class InventoryResponseDto {
  amount = 0;

  // @Type(() => Date)
  // @Transform((value) => value.valueOf(), { toPlainOnly: true })
  month: string;
}
