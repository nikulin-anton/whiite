import { faker } from '@faker-js/faker';
import { Card } from '../interfaces/Card';

export function getCardMock(card: Partial<Card> = {}): Card {
  return {
    id: faker.string.uuid(),
    number: faker.finance.maskedNumber({
      length: 4,
      parens: false,
      ellipsis: false,
    }),
    balance: faker.number.int({ min: 100, max: 10000 }),
    paymentNetwork: 'visa',
    currency: '$',
    ...card,
  };
}
