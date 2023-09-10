import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryID: 1, name: 'Product 1', price: 100 },
    { id: 2, categoryID: 2, name: 'Product 2', price: 200 },
    { id: 3, categoryID: 3, name: 'Product 3', price: 300 },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  createProduct(): string {
    return 'Create product';
  }

  getProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(): string {
    return 'Update product';
  }

  deleteProduct(): string {
    return 'Delete product';
  }
}
