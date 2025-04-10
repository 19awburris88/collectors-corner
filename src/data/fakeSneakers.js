// src/data/fakeSneakers.js
import { faker } from '@faker-js/faker';

export const fakeSneakers = Array.from({ length: 8 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  brand: faker.company.name(),
  image: faker.image.urlPicsumPhotos(), // or use faker.image.url() if needed
  releaseYear: faker.date.past({ years: 10 }).getFullYear(),
}));
