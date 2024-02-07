import styled from 'styled-components';
import BaseIconButton from './Base/BaseIconButton';
import BaseLabeledIconButton from './Base/BaseLabeledIconButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Actions() {
  return (
    <Container>
      <BaseLabeledIconButton icon="arrow-right">Send</BaseLabeledIconButton>
      <BaseLabeledIconButton icon="arrow-alt-from-bottom">
        Top up
      </BaseLabeledIconButton>
      <BaseLabeledIconButton icon="plus-small">Another</BaseLabeledIconButton>
    </Container>
  );
}
