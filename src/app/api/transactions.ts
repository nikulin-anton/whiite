import { Transaction } from '../interfaces/Transaction';
import { getTransactionMock } from '../mocks/getTransactionMock';

export function getTransactions(userId: string): Promise<Transaction[]> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          [
            getTransactionMock(),
            getTransactionMock(),
            getTransactionMock(),
            getTransactionMock(),
            getTransactionMock(),
          ].sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds())
        ),
      Math.random() * 2000
    )
  );
}
