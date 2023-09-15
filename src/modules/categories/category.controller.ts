import {
  Controller,
  Get,
  Res,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { Category } from '../models/category.model';
import { ResponseMessage, ResponseCode } from '../global/globalEnum';
import { ResponseType } from '../global/globalType';
import { ResponseData } from '../global/globalClass';
import { CategoryService } from './category.service';
import { CategoryDto } from 'src/dto/category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async list(@Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.findAll(),
          ResponseCode.SUCCESS,
          ResponseMessage.SUCCESS,
        ),
      );
    } catch (e) {
      return res.json(
        new ResponseData(
          null,
          ResponseCode.BAD_REQUEST,
          ResponseMessage.BAD_REQUEST,
        ),
      );
    }
  }

  @Get(':id')
  async detail(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<ResponseType<Category>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.findOne(id),
          ResponseCode.SUCCESS,
          ResponseMessage.SUCCESS,
        ),
      );
    } catch (e) {
      return res.json(
        new ResponseData(
          null,
          ResponseCode.BAD_REQUEST,
          ResponseMessage.BAD_REQUEST,
        ),
      );
    }
  }

  @Post()
  async create(
    @Body() category: CategoryDto,
    @Res() res: Response,
  ): Promise<ResponseType<Category>> {
    return res.json(
      new ResponseData(
        await this.categoryService.create(category),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      ),
    );
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() category: CategoryDto,
    @Res() res: Response,
  ): Promise<ResponseType<Category>> {
    return res.json(
      new ResponseData(
        await this.categoryService.update(id, category),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      ),
    );
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<ResponseType<boolean>> {
    try {
      const isFlag: boolean = await this.categoryService.delete(id);
      if (isFlag) {
        return res.json(
          new ResponseData(
            isFlag,
            ResponseCode.SUCCESS,
            ResponseMessage.SUCCESS,
          ),
        );
      } else {
        return res.json(
          new ResponseData(
            null,
            ResponseCode.BAD_REQUEST,
            ResponseMessage.BAD_REQUEST,
          ),
        );
      }
    } catch (e) {}
  }
}
