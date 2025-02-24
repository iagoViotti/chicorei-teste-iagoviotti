import { faker } from '@faker-js/faker';
import { reactive } from 'vue';
import type { CartProduct, Product } from './types';

export const cartProducts = reactive<CartProduct[]>([
  {
    id: 1,
    name: 'T-shirt',
    price: '10',
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: 'This is a T-shirt',
    category: 'shirts',
    quantity: 3,
  },
  {
    id: 2,
    name: 'Jeans',
    price: '20',
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: 'This is a pair of jeans',
    category: 'pants',
    quantity: 2,
  },
  {
    id: 3,
    name: 'Sunglasses',
    price: '5',
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: 'This is a pair of sunglasses',
    category: 'accessories',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Hat',
    price: '5',
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: 'This is a hat',
    category: 'accessories',
    quantity: 1,
  },
  {
    id: 5,
    name: 'sweatshirt',
    price: '15',
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: 'This is a sweatshirt',
    category: 'shirts',
    quantity: 1,
  },
  {
    id: 6,
    name: 'Jacket',
    price: '25',
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: 'This is a jacket',
    category: 'shirts',
    quantity: 1,
  },
  {
    id: 7,
    name: 'Shorts',
    price: '10',
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: 'This is a pair of shorts',
    category: 'pants',
    quantity: 1,
  },
]);

const addProduct = (product: Product) => {
  const existingProduct = cartProducts.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cartProducts.push({ ...product, quantity: 1 });
  }
};

const removeProduct = (product: Product) => {
  const existingProduct = cartProducts.find((p) => p.id === product.id);
  if (existingProduct) {
    if (existingProduct.quantity > 1) {
      existingProduct.quantity--;
    } else {
      const index = cartProducts.indexOf(existingProduct);
      cartProducts.splice(index, 1);
    }
  }
};

export const cartMock = reactive({
  cart: cartProducts,
  addProduct,
  removeProduct,
})
