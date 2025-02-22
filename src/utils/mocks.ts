import { faker } from '@faker-js/faker';
const generateProduct = () => {
  return {
    id: faker.number.int(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    image: faker.image.urlLoremFlickr({ width: 200, height: 200 }),
    description: faker.commerce.productDescription(),
  };
}

export const generateProducts = (n: number) => {
  return faker.helpers.multiple(generateProduct, { count: n });
};
