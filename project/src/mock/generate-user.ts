import faker from 'faker';
import { AuthorizationStatus } from '../const';
import UserState from '../types/userState';

export default function generateMockUser () : UserState {
  return {
    id: faker.datatype.number(200),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    avatarURL: faker.internet.avatar(),
    status: AuthorizationStatus.Auth,
  };
}
