import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrowIcon from '../../assets/angle-left.svg?react';
import { ICON_SIZE } from '../components/Base/BaseIcon';
import BaseIconButton from '../components/Base/BaseIconButton';
import TransactionsList from '../components/Transactions/TransactionsList';
import { Transaction } from '../interfaces/Transaction';
import { useAppSelector } from '../store/hooks';
import { SECONDARY_COLOR } from '../styles/colors';

const BackHeader = styled.header`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  color: ${SECONDARY_COLOR};
  font-weight: 300;
  text-align: center;
  width: 100%;
  padding-right: ${ICON_SIZE}px;
`;

const SubheaderTitle = styled.div`
  font-size: 20px;
  color: #92959e;
  margin-top: 48px;
`;

export default function TransactionsPage() {
  const transactions = useAppSelector((state) => state.transactions.items);
  const groupedByMonth = groupByDate(transactions);
  const availableMonths = Object.keys(groupedByMonth);

  const transactionsLists = availableMonths.map((key) => (
    <div key={key}>
      <SubheaderTitle>{key}</SubheaderTitle>
      <TransactionsList transactions={groupedByMonth[key]} />
    </div>
  ));

  return (
    <>
      <BackHeader>
        <Link to="/">
          <BaseIconButton>
            <LeftArrowIcon />
          </BaseIconButton>
        </Link>
        <Title>Transactions</Title>
      </BackHeader>
      {transactionsLists}
    </>
  );
}

function groupByDate(
  transactions: Transaction[]
): Record<string, Transaction[]> {
  const monthFormatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
  });
  const months: Record<string, Transaction[]> = {};

  transactions.forEach((transaction) => {
    const month = monthFormatter.format(transaction.date);

    if (months[month] === undefined) months[month] = [];

    months[month].push(transaction);
  });

  return months;
}
