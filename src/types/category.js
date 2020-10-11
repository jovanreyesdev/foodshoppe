export interface ICategory {
  id: number;
  name: string;
  label: string;
  category: Array<number>;
}

export interface ICategoryList {
  categories: Array<ICategory>;
}
