import { faker } from '@faker-js/faker';
import type { Category } from './types';

const generateProduct = (category: Category) => {
  return {
    id: faker.number.int(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: faker.commerce.productDescription(),
    category,
  };
}

export const generateProducts = (n: number, category?: Category) => {
  if (category) {
    return Array.from({ length: n }, () => generateProduct(category));
  }
  return Array.from({ length: n }, () => {
    const category = faker.helpers.shuffle(['shirt', 'pants', 'accessories'])[0];
    return generateProduct(category as Category);
  });
};


// export const cartProducts = [
//   {
//     id: 1,
//     name: 'T-shirt',
//     price: 10,
//     image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
//     description: 'This is a T-shirt',
//     category: 'shirts',
//   },
//   {
//     id: 2,
//     name: 'Jeans',
//     price: 20,
//     image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
//     description: 'This is a pair of jeans',
//     category: 'pants',
//   },
//   {
//     id: 2,
//     name: 'Jeans',
//     price: 20,
//     image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
//     description: 'This is a pair of jeans',
//     category: 'pants',
//   },
//   {
//     id: 2,
//     name: 'Jeans',
//     price: 20,
//     image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
//     description: 'This is a pair of jeans',
//     category: 'pants',
//   },
//   {
//     id: 3,
//     name: 'Sunglasses',
//     price: 5,
//     image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
//     description: 'This is a pair of sunglasses',
//     category: 'accessories',
//   },
//   {
//     id: 3,
//     name: 'Sunglasses',
//     price: 5,
//     image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
//     description: 'This is a pair of sunglasses',
//     category: 'accessories',
//   },
//   {
//     id: 4,
//     name: 'Hat',
//     price: 5,
//     image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
//     description: 'This is a hat',
//     category: 'accessories',
//   },

// ];