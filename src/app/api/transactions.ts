import { Transaction } from '../interfaces/Transaction';
import { getTransactionMock } from '../mocks/getTransactionMock';

export function getTransactions(userId: string): Promise<Transaction[]> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          getTransactionMock(),
          getTransactionMock(),
          getTransactionMock(),
          getTransactionMock(),
          getTransactionMock(),
        ]),
      Math.random() * 2000
    )
  );
}
