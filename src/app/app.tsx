import { useEffect } from 'react';
import styled from 'styled-components';
import Actions from './components/Actions';
import BaseLoader from './components/Base/BaseLoader';
import CardsSlider from './components/Cards/CardsSlider';
import Header from './components/Header';
import TransactionsList from './components/Transactions/TransactionsList';
import { fetchCards } from './store/cards';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchTransactions } from './store/transactions';
import { fetchUser } from './store/user';

// https://dribbble.com/shots/19270611-Bank-payment-app

const StyledApp = styled.div`
  padding: 30px;
  max-width: 430px;
`;

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

export function App() {
  const user = useAppSelector((state) => state.user);
  const cards = useAppSelector((state) => state.cards);
  const transactions = useAppSelector((state) => state.transactions);
  const dispatch = useAppDispatch();
  const isLoading = user.loading || cards.loading || transactions.loading;

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (!user.data?.id) return;

    dispatch(fetchCards(user.data.id));
    dispatch(fetchTransactions(user.data.id));
  }, [user]);

  if (isLoading || !user.data) {
    return (
      <LoaderContainer>
        <BaseLoader />
      </LoaderContainer>
    );
  }

  return (
    <StyledApp>
      <Header user={user.data} />
      <StyledCardsSlider cards={cards.items} />
      <Actions />
      <TransactionsList transactions={transactions.items} />
    </StyledApp>
  );
}

export default App;
