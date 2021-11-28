import faker from 'faker';
import LoginResponse from '../types/loginResponse';

export default function generateFakeLoginResponse () : LoginResponse {
  return {
    id: faker.datatype.number(200),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    'avatar_url': faker.internet.avatar(),
    token: 'secret',
  };
}
