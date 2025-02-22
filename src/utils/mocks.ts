import { faker } from '@faker-js/faker';
const generateProduct = () => {
  return {
    id: faker.number.int(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    image: faker.image.urlLoremFlickr({ width: 100, height: 100 }),
  };
}

export const generateProducts = (n: number) => {
  return faker.helpers.multiple(generateProduct, { count: n });
};
