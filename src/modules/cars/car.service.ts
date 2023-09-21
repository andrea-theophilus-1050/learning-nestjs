import { Injectable, Inject } from '@nestjs/common';
import { Car } from '../models/car.model';
import { ICarRepository } from 'src/interfaces/ICarRepository';

@Injectable()
export class CarService {
  constructor(
    @Inject('ICarRepository')
    private carRepository: ICarRepository,
  ) {}

  async findAll(): Promise<Car[]> {
    return await this.carRepository.findAll();
  }

  async findOne(id: number): Promise<Car> {
    return await this.carRepository.findOne(id);
  }

  async create(car: Car): Promise<Car> {
    return await this.carRepository.create(car);
  }

  async update(id: number, car: Car): Promise<Car> {
    await this.carRepository.update(id, car);
    return this.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    return await this.carRepository.delete(id);
  }
}
