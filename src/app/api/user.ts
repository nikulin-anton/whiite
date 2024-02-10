import { User } from '../interfaces/User';
import { getUserMock } from '../mocks/getUserMock';

export function getUser(): Promise<User> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getUserMock()), Math.random() * 2000)
  );
}
