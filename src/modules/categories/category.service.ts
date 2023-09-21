import { Injectable, Inject } from '@nestjs/common';
import { Category } from '../models/category.model';
import { ICategoryRepository } from 'src/interfaces/ICategoryRepository';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

  async findOne(id: number): Promise<Category> {
    return await this.categoryRepository.findOne(id);
  }

  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.create(category);
  }

  async update(id: number, category: Category): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return this.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    return await this.categoryRepository.delete(id);
  }
}
