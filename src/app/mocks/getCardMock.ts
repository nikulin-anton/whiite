import { faker } from '@faker-js/faker';

export function getCardMock() {
  return {
    number: faker.finance.maskedNumber({
      length: 4,
      parens: false,
      ellipsis: false,
    }),
    balance: faker.number.int({ min: 100, max: 10000 }),
    paymentNetwork: 'visa',
    currency: '$',
  };
}
