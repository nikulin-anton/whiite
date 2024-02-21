export interface Transaction {
  id: string;
  receiptNumber: string;
  recipient: {
    name: string;
    area: string;
    logo: string;
  };
  payer: {
    name: string;
    accountNumber: string;
  };
  amount: number;
  currency: string;
  date: Date;
}
