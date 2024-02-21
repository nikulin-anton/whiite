import { Link, useParams } from 'react-router-dom';
import LeftArrowIcon from '../../assets/angle-left.svg?react';
import DownloadIcon from '../../assets/download.svg?react';
import BaseHeader from '../components/Base/BaseHeader';
import BaseIconButton from '../components/Base/BaseIconButton';
import { useAppSelector } from '../store/hooks';

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
    </>
  );
}
