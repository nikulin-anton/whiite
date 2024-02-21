import { ReactNode } from 'react';
import styled from 'styled-components';
import { BACKGROUND_DEFAULT } from '../../styles/colors';

export type BaseIconSize = 'm' | 'l';

export const ICON_SIZE_MAP = {
  m: 60,
  l: 90,
};

export const ICON_SIZE = 60;
const SVG_SIZE = 24;

const Container = styled.div<{ $size: 'm' | 'l' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${(props) => ICON_SIZE_MAP[props.$size]}px;
  height: ${(props) => ICON_SIZE_MAP[props.$size]}px;
  background-color: ${BACKGROUND_DEFAULT};
  border-radius: 16px;

  svg {
    max-width: ${SVG_SIZE}px;
    max-height: ${SVG_SIZE}px;
  }

  img {
    max-width: 100%;
    object-fit: fill;
  }
`;

type Props = {
  color?: string;
  children?: ReactNode;
  className?: string;
  size?: BaseIconSize;
};

export default function BaseIcon({ className, children, color, size }: Props) {
  const classList = [];

  className && classList.push(className);

  return (
    <Container $size={size || 'm'} className={classList.join(' ')}>
      {children}
    </Container>
  );
}
