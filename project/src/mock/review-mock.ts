import ReviewType from '../types/review-type';
import faker from 'faker';

export default function generateMockReview(): ReviewType {
  return {
    id: faker.datatype.number(),
    user: {
      id: faker.datatype.number(),
      name: faker.name.firstName(),
    },
    rating: faker.datatype.float(1),
    comment: faker.lorem.paragraph(3),
    date: String(faker.date.past()),
  };
}
