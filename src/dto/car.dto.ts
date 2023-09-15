import { MinLength, IsNumber } from 'class-validator';

export class CarDto {
  @MinLength(5, { message: 'Name is too short' })
  productName?: string;

  @IsNumber()
  price?: number;

  @IsNumber()
  category_id?: number;
}
