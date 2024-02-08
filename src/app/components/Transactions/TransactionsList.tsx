import styled from 'styled-components';
import TransactionItem from './TransactionItem';
import BaseLink from '../Base/BaseLink';
import { getTransactionMock } from '../../mocks/getTransactionMock';

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

export default function TransactionsList() {
  const transactions = [
    getTransactionMock(),
    getTransactionMock(),
    getTransactionMock(),
    getTransactionMock(),
    getTransactionMock(),
  ];

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
