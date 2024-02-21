import { faker } from '@faker-js/faker';
import { Transaction } from '../interfaces/Transaction';

export function getTransactionMock(
  baseTransaction: Partial<Transaction> = {}
): Transaction {
  return {
    id: faker.string.uuid(),
    receiptNumber: `${faker.number.int({
      min: 10000,
      max: 99999,
    })}-${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({
      min: 1000,
      max: 9999,
    })}`,
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
    payer: {
      name: faker.person.fullName(),
      accountNumber: faker.finance.accountNumber(),
    },
    amount: +faker.finance.amount({ min: 0.5, max: 110 }),
    currency: '$',
    date: faker.date.recent({ days: 10 }),
    ...baseTransaction,
  };
}
