import styled from 'styled-components';
import Actions from '../components/Actions';
import BaseLoader from '../components/Base/BaseLoader';
import CardsSlider from '../components/Cards/CardsSlider';
import Header from '../components/Header';
import TransactionsList from '../components/Transactions/TransactionsList';
import { useAppSelector } from '../store/hooks';

const StyledCardsSlider = styled(CardsSlider)`
  margin-top: 28px;
`;

const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default function MainPage() {
  const user = useAppSelector((state) => state.user);
  const cards = useAppSelector((state) => state.cards);
  const transactions = useAppSelector((state) => state.transactions);
  const isLoading = user.loading || cards.loading || transactions.loading;

  if (isLoading || !user.data) {
    return (
      <LoaderContainer>
        <BaseLoader />
      </LoaderContainer>
    );
  }

  return (
    <>
      <Header user={user.data} />
      <StyledCardsSlider cards={cards.items} />
      <Actions />
      <TransactionsList transactions={transactions.items} />
    </>
  );
}
