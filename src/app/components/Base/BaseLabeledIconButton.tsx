import { ComponentPropsWithoutRef } from 'react';
import BaseIconButton from './BaseIconButton';
import styled from 'styled-components';

type Props = {
  imageUrl?: string;
  icon?: string;
} & ComponentPropsWithoutRef<'button'>;

const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  margin-top: 20px;
`;

export default function BaseLabeledIconButton(props: Props) {
  return (
    <Container>
      <BaseIconButton {...props} />
      <Label>{props.children}</Label>
    </Container>
  );
}
