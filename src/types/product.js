export interface IProduct {
  id: number;
  name: string;
  label: string;
  price: number;
  category: number;
}

export interface IProductList {
  products: Array<IProduct>
}
