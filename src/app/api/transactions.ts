import { Transaction } from '../interfaces/Transaction';
import { getTransactionMock } from '../mocks/getTransactionMock';

const transactionsMock = new Array(100)
  .fill(null)
  .map(() => getTransactionMock())
  .sort((a, b) => (a.date > b.date ? -1 : 1));

export function getTransactions(userId: string): Promise<Transaction[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(transactionsMock), Math.random() * 2000)
  );
}
