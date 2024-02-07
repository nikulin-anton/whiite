import styled from 'styled-components';
import TransactionItem from './TransactionItem';

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 15px;
`;

export default function TransactionsList() {
  return (
    <List>
      <TransactionItem></TransactionItem>
      <TransactionItem></TransactionItem>
    </List>
  );
}
