import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CarsEntity } from '../../entities/cars.entity';
import { Car } from '../models/car.model';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarsEntity)
    private carRepository: Repository<CarsEntity>,
  ) {}

  async findAll(): Promise<Car[]> {
    return await this.carRepository.find();
  }

  async findOne(id: number): Promise<Car> {
    return await this.carRepository.findOne({ where: { id } });
  }

  async create(car: Car): Promise<Car> {
    return await this.carRepository.save(car);
  }

  async update(id: number, car: Car): Promise<Car> {
    await this.carRepository.update(id, car);
    return this.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const isFlag: DeleteResult = await this.carRepository.delete(id);
    return isFlag.affected === 1;
  }
}
