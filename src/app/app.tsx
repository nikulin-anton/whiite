import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './pages/Main';
import TransactionInfoPage from './pages/TransactionInfo';
import TransactionsPage from './pages/Transactions';
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
  const location = useLocation();

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
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/transactions/:id" element={<TransactionInfoPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </StyledApp>
  );
}

export default App;
