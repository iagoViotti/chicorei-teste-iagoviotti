export type Category = 'shirts' | 'pants' | 'accessories';

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  category: Category;
};

export type CartProduct = Product & {
  quantity: number;
};
