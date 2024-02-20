import { Card } from '../interfaces/Card';
import { getCardMock } from '../mocks/getCardMock';

const cardsMock = new Array(3).fill(null).map(() => getCardMock());

export function getCards(userId: string): Promise<Card[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(cardsMock), Math.random() * 2000)
  );
}
