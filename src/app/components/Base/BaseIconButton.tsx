import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import BaseIcon from './BaseIcon';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

const StyledButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  overflow: hidden;
`;

export default function BaseIconButton({ children, ...buttonProps }: Props) {
  return (
    <StyledButton {...buttonProps}>
      <BaseIcon>{children}</BaseIcon>
    </StyledButton>
  );
}
