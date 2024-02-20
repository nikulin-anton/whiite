import styled from 'styled-components';
import BaseIcon from '../Base/BaseIcon';
import { Transaction } from '../../interfaces/Transaction';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  transaction: Transaction;
}

const Container = styled.button`
  display: grid;
  grid-template-columns: max-content auto max-content;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  align-items: center;
  font-size: 22px;
  padding: 0;
  cursor: pointer;
`;

const TransactionRecipient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
  overflow: hidden;
`;

const TransactionAmount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Recipient = styled.div`
  text-align: left;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

const Area = styled.div`
  font-size: 19px;
  text-transform: capitalize;
  color: #858c94;
`;

const Amount = styled.div`
  font-weight: bold;
`;

const Date = styled.div`
  color: lightgray;
  font-size: 19px;
  margin-top: 8px;
  color: #858c94;
`;

export default function TransactionItem({ transaction, ...props }: Props) {
  return (
    <Container {...props}>
      <BaseIcon>
        <img src={transaction.recipient.logo} alt="Logo" />
      </BaseIcon>
      <TransactionRecipient>
        <Recipient>{transaction.recipient.name}</Recipient>
        <Area>{transaction.recipient.area}</Area>
      </TransactionRecipient>
      <TransactionAmount>
        <Amount>
          {transaction.currency}
          {transaction.amount}
        </Amount>
        <Date>
          {transaction.date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </Date>
      </TransactionAmount>
    </Container>
  );
}
