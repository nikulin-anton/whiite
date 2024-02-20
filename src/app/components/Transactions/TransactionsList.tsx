import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Transaction } from '../../interfaces/Transaction';
import TransactionItem from './TransactionItem';

type Props = {
  transactions: Transaction[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 48px;
`;

export default function TransactionsList({ transactions }: Props) {
  const navigate = useNavigate();
  const navigateToTransaction = (id: string) => navigate(`/transactions/${id}`);

  return (
    <Container>
      <List>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onClick={() => navigateToTransaction(transaction.id)}
          />
        ))}
      </List>
    </Container>
  );
}
