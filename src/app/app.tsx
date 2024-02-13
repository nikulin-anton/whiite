import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCards } from './store/cards';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchTransactions } from './store/transactions';
import { fetchUser } from './store/user';

// https://dribbble.com/shots/19270611-Bank-payment-app

const StyledApp = styled.div`
  padding: 30px;
  max-width: 430px;
`;

export function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (!user.data?.id) return;

    dispatch(fetchCards(user.data.id));
    dispatch(fetchTransactions(user.data.id));
  }, [user]);

  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  );
}

export default App;
