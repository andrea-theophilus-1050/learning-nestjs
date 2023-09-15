import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CategoryEntity } from './categories.entity';

@Entity('cars')
export class CarsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column({ name: 'category_id' })
  category_id: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
