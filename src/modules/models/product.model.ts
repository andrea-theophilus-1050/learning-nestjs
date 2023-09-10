export class Product {
  id?: number;
  name?: string;
  categoryID?: number;
  price?: number;

  constructor({ id, name, categoryID, price }) {
    if (id !== null) this.id = id;
    if (name !== null) this.name = name;
    if (categoryID !== null) this.categoryID = categoryID;
    if (price !== null) this.price = price;
  }
}
