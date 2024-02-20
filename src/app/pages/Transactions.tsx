import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrowIcon from '../../assets/angle-left.svg?react';
import BaseHeader from '../components/Base/BaseHeader';
import BaseIconButton from '../components/Base/BaseIconButton';
import TransactionsList from '../components/Transactions/TransactionsList';
import { Transaction } from '../interfaces/Transaction';
import { useAppSelector } from '../store/hooks';

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
      <BaseHeader>
        {{
          leftAction: (
            <Link to="/">
              <BaseIconButton>
                <LeftArrowIcon />
              </BaseIconButton>
            </Link>
          ),
          title: 'Transactions',
        }}
      </BaseHeader>
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
