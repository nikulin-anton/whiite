import styled from 'styled-components';
import Actions from '../components/Actions';
import BaseLink from '../components/Base/BaseLink';
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

const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 47px;
`;

const Title = styled.div`
  font-size: 20px;
  color: #92959e;
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
      <div className="transactions">
        <Subheader>
          <Title>Transactions</Title>
          <BaseLink to="/transactions">See all</BaseLink>
        </Subheader>
        <TransactionsList transactions={transactions.items.slice(0, 5)} />
      </div>
    </>
  );
}
