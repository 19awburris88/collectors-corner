import { faker } from '@faker-js/faker';

const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

function generateFakeReleases() {
  const releases = Array.from({ length: 30 }, () => {
    const releaseDate = faker.date.between({
      from: new Date('2025-01-01'),
      to: new Date('2025-12-31'),
    });

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      brand: faker.company.name(),
      image: faker.image.urlPicsumPhotos(),
      price: faker.commerce.price({ min: 100, max: 300 }),
      releaseDate,
      month: months[releaseDate.getMonth()],
    };
  });

  // Group by month
  const grouped = months.reduce((acc, month) => {
    acc[month] = releases.filter((r) => r.month === month);
    return acc;
  }, {});

  return grouped;
}

export const fakeReleases = generateFakeReleases();
