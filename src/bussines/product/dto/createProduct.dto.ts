import { Brand } from '.prisma/client';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  description: string;

  @IsNotEmpty()
  category: string;
}
