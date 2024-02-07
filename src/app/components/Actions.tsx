import styled from 'styled-components';
import ArrowFromButtomIcon from '../../assets/arrow-alt-from-bottom.svg?react';
import ArrowRightIcon from '../../assets/arrow-right.svg?react';
import PlusIcon from '../../assets/plus-small.svg?react';
import BaseLabeledIconButton from './Base/BaseLabeledIconButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 6px;
`;

export default function Actions() {
  return (
    <Container>
      <BaseLabeledIconButton label="Send">
        <ArrowRightIcon />
      </BaseLabeledIconButton>
      <BaseLabeledIconButton label="Top up">
        <ArrowFromButtomIcon />
      </BaseLabeledIconButton>
      <BaseLabeledIconButton label="Another">
        <PlusIcon />
      </BaseLabeledIconButton>
    </Container>
  );
}
