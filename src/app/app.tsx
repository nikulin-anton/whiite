import styled from 'styled-components';
import Actions from './components/Actions';
import CardsSlider from './components/Cards/CardsSlider';
import Header from './components/Header';

// https://dribbble.com/shots/19270611-Bank-payment-app

const StyledApp = styled.div`
  padding: 30px;
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
    </StyledApp>
  );
}

export default App;
