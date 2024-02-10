import styled from 'styled-components';
import { Card } from '../../interfaces/Card';
import CardItem from './Card';

type Props = {
  cards: Card[];
};

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 32px -30px;
  padding: 0 30px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function CardsSlider({ cards }: Props) {
  return (
    <Container>
      {cards.map((card) => (
        <CardItem
          key={card.number}
          number={card.number}
          balance={card.balance}
          currency={card.currency}
        />
      ))}
    </Container>
  );
}
