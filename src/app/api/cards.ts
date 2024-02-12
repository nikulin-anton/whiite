import { Card } from '../interfaces/Card';
import { getCardMock } from '../mocks/getCardMock';

export function getCards(userId: string): Promise<Card[]> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          getCardMock(),
          getCardMock(),
          getCardMock(),
          getCardMock(),
          getCardMock(),
          getCardMock(),
        ]),
      Math.random() * 2000
    )
  );
}
