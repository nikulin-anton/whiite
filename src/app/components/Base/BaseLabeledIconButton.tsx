import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import BaseIconButton from './BaseIconButton';

type Props = {
  children: ReactNode;
  label: string;
} & ComponentPropsWithoutRef<'button'>;

const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  margin-top: 13px;
  font-size: 20px;
`;

export default function BaseLabeledIconButton(props: Props) {
  return (
    <Container>
      <BaseIconButton {...props}>{props.children}</BaseIconButton>
      <Label>{props.label}</Label>
    </Container>
  );
}
