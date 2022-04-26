import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterEntryDto {
  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  amount: number;

  @IsNotEmpty()
  brand: string;
}
