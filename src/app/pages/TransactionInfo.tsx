import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrowIcon from '../../assets/angle-left.svg?react';
import DownloadIcon from '../../assets/download.svg?react';
import BaseHeader from '../components/Base/BaseHeader';
import BaseIcon from '../components/Base/BaseIcon';
import BaseIconButton from '../components/Base/BaseIconButton';
import { useAppSelector } from '../store/hooks';
import { BACKGROUND_DEFAULT, SECONDARY_COLOR } from '../styles/colors';

const TransactionRecipientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0px;
`;

const Recipient = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

const Area = styled.div`
  margin-top: 7px;
  font-size: 19px;
  text-transform: capitalize;
  color: #858c94;
`;

const TransactionAmount = styled.div`
  padding: 32px;
  background-color: ${BACKGROUND_DEFAULT};
  font-size: 30px;
  font-weight: bold;
  border-radius: 40px;
  text-align: center;
  margin-bottom: 45px;
`;

const TransactionDetails = styled.div`
  & + & {
    margin-top: 45px;
  }
`;

const TransactionsDetailsMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 22px;
  font-weight: bold;
`;
const TransactionsDetailsSecondary = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: ${SECONDARY_COLOR};
  font-size: 19px;
  padding-top: 6px;
`;

export default function TransactionInfoPage() {
  const { id } = useParams();
  const state = useAppSelector((state) => state.transactions);
  const transaction = state.items.find((item) => item.id === id);

  if (transaction === undefined) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <BaseHeader>
        {{
          leftAction: (
            <Link to="/">
              <BaseIconButton>
                <LeftArrowIcon />
              </BaseIconButton>
            </Link>
          ),
          title: 'Receipt',
          rightAction: (
            <BaseIconButton>
              <DownloadIcon />
            </BaseIconButton>
          ),
        }}
      </BaseHeader>
      <TransactionRecipientInfo>
        <BaseIcon size="l">
          <img src={transaction.recipient.logo} />
        </BaseIcon>
        <Recipient>{transaction.recipient.name}</Recipient>
        <Area>{transaction.recipient.area}</Area>
      </TransactionRecipientInfo>
      <TransactionAmount>
        {transaction.currency}
        {transaction.amount}
      </TransactionAmount>
      <TransactionDetails>
        <TransactionsDetailsMain>
          <div>Payment</div>
          <div>{transaction.payer.name}</div>
        </TransactionsDetailsMain>
        <TransactionsDetailsSecondary>
          <div>Account</div>
          <div>{transaction.payer.accountNumber}</div>
        </TransactionsDetailsSecondary>
      </TransactionDetails>

      <TransactionDetails>
        <TransactionsDetailsMain>
          <div>Recepient</div>
          <div>{transaction.recipient.name}</div>
        </TransactionsDetailsMain>
        <TransactionsDetailsSecondary>
          <div>Receipt</div>
          <div>№{transaction.receiptNumber}</div>
        </TransactionsDetailsSecondary>
      </TransactionDetails>

      <TransactionDetails>
        <TransactionsDetailsMain>
          <div>Date</div>
          <div>
            {transaction.date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </TransactionsDetailsMain>
        <TransactionsDetailsSecondary>
          <div></div>
          <div>
            {transaction.date.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </div>
        </TransactionsDetailsSecondary>
      </TransactionDetails>
    </>
  );
}
