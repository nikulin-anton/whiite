import { Transaction } from '../interfaces/Transaction';
import { getTransactionMock } from '../mocks/getTransactionMock';

export function getTransactions(userId: string): Promise<Transaction[]> {
  const transactions: Transaction[] = [];

  for (let i = 0; i < 100; i++) {
    transactions.push(getTransactionMock());
  }

  return new Promise((resolve) =>
    setTimeout(
      () => resolve(transactions.sort((a, b) => (a.date > b.date ? -1 : 1))),
      Math.random() * 2000
    )
  );
}
