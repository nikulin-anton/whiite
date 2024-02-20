import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export default function TransactionInfoPage() {
  const { id } = useParams();
  const state = useAppSelector((state) => state.transactions);
  const transaction = state.items.find((item) => item.id === id);

  if (transaction === undefined) {
    return <div>Something went wrong</div>;
  }

  return <div>Here will be a transaction: {JSON.stringify(transaction)}</div>;
}
