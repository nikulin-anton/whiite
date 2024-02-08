import styled from 'styled-components';
import TransactionItem from './TransactionItem';
import BaseLink from '../Base/BaseLink';

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
  color: lightblue;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 48px;
`;

export default function TransactionsList() {
  return (
    <Container>
      <Header>
        <Title>Transactions</Title>
        <BaseLink to="/transactions">See all</BaseLink>
      </Header>
      <List>
        <TransactionItem></TransactionItem>
        <TransactionItem></TransactionItem>
      </List>
    </Container>
  );
}
