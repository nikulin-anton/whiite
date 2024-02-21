import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import BaseIcon, { BaseIconSize } from './BaseIcon';

type Props = {
  children: ReactNode;
  size?: BaseIconSize;
} & ComponentPropsWithoutRef<'button'>;

const StyledButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  overflow: hidden;
`;

export default function BaseIconButton({
  children,
  size,
  ...buttonProps
}: Props) {
  return (
    <StyledButton {...buttonProps}>
      <BaseIcon size={size}>{children}</BaseIcon>
    </StyledButton>
  );
}
