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
import { Car } from '../models/car.model';
import { ResponseMessage, ResponseCode } from '../global/globalEnum';
import { ResponseType } from '../global/globalType';
import { ResponseData } from '../global/globalClass';
import { CarService } from './car.service';
import { CarDto } from 'src/dto/car.dto';

@Controller('cars')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  async list(@Res() res: Response): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.findAll(),
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
  ): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.findOne(id),
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
    @Body() car: CarDto,
    @Res() res: Response,
  ): Promise<ResponseType<Car>> {
    return res.json(
      new ResponseData(
        await this.carService.create(car),
        ResponseCode.SUCCESS,
        ResponseMessage.SUCCESS,
      ),
    );
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() car: CarDto,
    @Res() res: Response,
  ): Promise<ResponseType<Car>> {
    return res.json(
      new ResponseData(
        await this.carService.update(id, car),
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
      const isFlag: boolean = await this.carService.delete(id);
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
