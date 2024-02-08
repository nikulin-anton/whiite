import { faker } from '@faker-js/faker';
import { Transaction } from '../interfaces/Transaction';

export function getTransactionMock(
  baseTransaction: Partial<Transaction> = {}
): Transaction {
  return {
    id: faker.string.uuid(),
    recipient: {
      name: faker.company.name(),
      area: faker.company.buzzNoun(),
      logo: faker.image.urlLoremFlickr({
        width: 300,
        height: 300,
        category: 'logos',
      }),
      ...baseTransaction.recipient,
    },
    amount: +faker.finance.amount({ min: 0.5, max: 110 }),
    currency: '$',
    date: faker.date.past(),
    ...baseTransaction,
  };
}
