import { Category } from 'src/modules/models/category.model';
import { AbstractRepository } from './AbstractRepository';

export interface ICategoryRepository extends AbstractRepository<Category> {}
