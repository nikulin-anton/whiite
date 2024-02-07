import styled from 'styled-components';
import { getCardMock } from '../../mocks/getCardMock';
import Card from './Card';

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 32px -30px;
  padding: 0 30px;
`;

export default function CardsSlider() {
  const cards = [{ number: 3745, balance: 5634 }, getCardMock(), getCardMock()];

  return (
    <Container>
      {cards.map((card) => (
        <Card
          key={card.number}
          number={card.number}
          balance={card.balance}
          currency={card.currency}
          paymentNetwork={card.paymentNetwork}
        />
      ))}
    </Container>
  );
}
