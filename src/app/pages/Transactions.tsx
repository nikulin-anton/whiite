import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrowIcon from '../../assets/angle-left.svg?react';
import { ICON_SIZE } from '../components/Base/BaseIcon';
import BaseIconButton from '../components/Base/BaseIconButton';
import TransactionsList from '../components/Transactions/TransactionsList';
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

export default function TransactionsPage() {
  const transactions = useAppSelector((state) => state.transactions.items);

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
      <TransactionsList transactions={transactions}></TransactionsList>
    </>
  );
}
