import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  @MinLength(5, { message: 'Name is too short' })
  name?: string;

  @IsNotEmpty()
  categoryID?: number;

  @IsNumber({}, { message: 'Price must be a number' })
  price?: number;
}
