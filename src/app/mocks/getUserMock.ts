import { faker } from '@faker-js/faker';
import { User } from '../interfaces/User';

export function getUserMock(user: Partial<User> = {}): User {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatarUrl: faker.image.avatar(),
    ...user,
  };
}
