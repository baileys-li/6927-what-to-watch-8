import faker from 'faker';
import { AuthData } from '../types/auth-data';

export default function generateFakeCredentials () : AuthData {
  return {
    email: faker.internet.email(),
    password:'pass123',
  };
}
