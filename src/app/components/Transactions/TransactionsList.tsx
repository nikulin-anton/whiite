import styled from 'styled-components';
import { Transaction } from '../../interfaces/Transaction';
import BaseLink from '../Base/BaseLink';
import TransactionItem from './TransactionItem';

type Props = {
  transactions: Transaction[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  color: #92959e;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 48px;
`;

export default function TransactionsList({ transactions }: Props) {
  return (
    <Container>
      <Header>
        <Title>Transactions</Title>
        <BaseLink to="/transactions">See all</BaseLink>
      </Header>
      <List>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </Container>
  );
}
