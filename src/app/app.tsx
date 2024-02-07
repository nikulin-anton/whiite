import styled from 'styled-components';
import Actions from './components/Actions';
import CardsSlider from './components/Cards/CardsSlider';
import Header from './components/Header';
import TransactionsList from './components/Transactions/TransactionsList';

// https://dribbble.com/shots/19270611-Bank-payment-app

const StyledApp = styled.div`
  padding: 30px;
  max-width: 430px;
`;

const StyledCardsSlider = styled(CardsSlider)`
  margin-top: 28px;
`;

export function App() {
  return (
    <StyledApp>
      <Header />
      <StyledCardsSlider />
      <Actions />
      <TransactionsList />
    </StyledApp>
  );
}

export default App;
