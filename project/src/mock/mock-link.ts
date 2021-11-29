import LinkType from '../types/link';
import faker from 'faker';

export default function generateFakeLink(): LinkType {
  return {
    href: faker.internet.url(),
    text: faker.lorem.words(2),
  };
}
