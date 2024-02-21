import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrowIcon from '../../assets/angle-left.svg?react';
import DownloadIcon from '../../assets/download.svg?react';
import BaseHeader from '../components/Base/BaseHeader';
import BaseIcon from '../components/Base/BaseIcon';
import BaseIconButton from '../components/Base/BaseIconButton';
import { useAppSelector } from '../store/hooks';

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
`;

const Area = styled.div`
  margin-top: 7px;
  font-size: 19px;
  text-transform: capitalize;
  color: #858c94;
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
    </>
  );
}
