import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CarsEntity } from './cars.entity';

@Entity('categories')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @OneToMany(() => CarsEntity, (cars) => cars.category)
  @JoinColumn()
  cars: CarsEntity[];
}
