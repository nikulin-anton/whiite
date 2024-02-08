export interface Transaction {
  id: string;
  recipient: {
    name: string;
    area: string;
    logo: string;
  };
  amount: number;
  currency: string;
  date: Date;
}
