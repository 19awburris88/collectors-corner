// src/data/fakeUsers.js
import { faker } from '@faker-js/faker';

export const fakeUsers = Array.from({ length: 5 }, () => ({
  id: faker.string.uuid(),
  name: faker.internet.userName(),
  email: faker.internet.email(),
  password: 'password123',
  avatar: faker.image.avatar(),
  bio: faker.hacker.phrase(),
}));

console.log('📧 Available Fake Users for Login:', fakeUsers);