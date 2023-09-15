import { MinLength, IsString } from 'class-validator';

export class CategoryDto {
  @MinLength(5, { message: 'Name is too short' })
  categoryName?: string;

  @IsString()
  description?: string;
}
