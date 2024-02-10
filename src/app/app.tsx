import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Actions from './components/Actions';
import CardsSlider from './components/Cards/CardsSlider';
import Header from './components/Header';
import TransactionsList from './components/Transactions/TransactionsList';
import { User } from './interfaces/User';
import { getUser } from './api/user';
import BaseLoader from './components/Base/BaseLoader';
import { Card } from './interfaces/Card';
import { getCards } from './api/cards';
import { Transaction } from './interfaces/Transaction';
import { getTransactions } from './api/transactions';

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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);

        return Promise.all([getCards(user.id), getTransactions(user.id)]);
      })
      .then(([cards, transactions]) => {
        setCards(cards);
        setTransactions(transactions);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || user === null) {
    return (
      <LoaderContainer>
        <BaseLoader />
      </LoaderContainer>
    );
  }

  return (
    <StyledApp>
      <Header user={user} />
      <StyledCardsSlider cards={cards} />
      <Actions />
      <TransactionsList transactions={transactions} />
    </StyledApp>
  );
}

export default App;
