import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from '../global/globalClass';
import { ResponseCode, ResponseMessage } from '../global/globalEnum';
import { Product } from '../models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getAllProducts(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.productService.getAllProducts(),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product[]>(
        e,
        ResponseCode.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }

  @Post()
  createProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): ResponseData<ProductDto> {
    try {
      return new ResponseData<Product>(
        this.productService.createProduct(productDto),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product>(
        e,
        ResponseCode.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }
  @Get('/:id')
  getProduct(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.getProduct(id),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product>(
        e,
        ResponseCode.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }

  @Put('/:id')
  updateProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
    @Param('id') id: number,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.updateProduct(productDto, id),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product>(
        e,
        ResponseCode.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number): ResponseData<boolean> {
    try {
      return new ResponseData<boolean>(
        this.productService.deleteProduct(id),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<boolean>(
        e,
        ResponseCode.BAD_REQUEST,
        ResponseMessage.BAD_REQUEST,
      );
    }
  }
}
