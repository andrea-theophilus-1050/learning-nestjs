import { Car } from 'src/modules/models/car.model';
import { AbstractRepository } from './AbstractRepository';

export interface ICarRepository extends AbstractRepository<Car> {}
