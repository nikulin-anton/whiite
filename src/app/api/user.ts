import { User } from '../interfaces/User';
import { getUserMock } from '../mocks/getUserMock';

const userMock = getUserMock();

export function getUser(): Promise<User> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(userMock), Math.random() * 2000)
  );
}
