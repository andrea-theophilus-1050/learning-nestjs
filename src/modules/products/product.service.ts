import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';
import { ProductDto } from 'src/dto/product.dto';

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

  createProduct(productDto: ProductDto): Product {
    const product: Product = {
      id: Math.random(),
      ...productDto,
    };
    this.products.push(product);
    return product;
  }

  getProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(productDto: ProductDto, id: number): Product {
    const index = this.products.findIndex((item) => item.id === Number(id));
    this.products[index].categoryID = productDto.categoryID;
    this.products[index].name = productDto.name;
    this.products[index].price = productDto.price;
    return this.products[index];
  }

  deleteProduct(id: number): boolean {
    const index = this.products.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
