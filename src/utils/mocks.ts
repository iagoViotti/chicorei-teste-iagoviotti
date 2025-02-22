import { faker } from '@faker-js/faker';

type Category = 'shirts' | 'pants' | 'accessories';

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

export const generateProducts = (n: number, category: Category) => {
  if (category) {
    return Array.from({ length: n }, () => generateProduct(category));
  }
  return Array.from({ length: n }, () => {
    const category = faker.helpers.shuffle(['shirt', 'pants', 'accessories'])[0];
    return generateProduct(category as Category);
  });
};