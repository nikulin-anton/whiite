import { ReactNode } from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../styles/colors';
import { ICON_SIZE } from './BaseIcon';

type Props = {
  children: {
    leftAction?: ReactNode;
    title?: string;
    rightAction?: ReactNode;
  };
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: ${SECONDARY_COLOR};
  font-weight: 300;
  text-align: center;
  width: 100%;
  padding-right: ${ICON_SIZE}px;
`;

export default function BaseHeader({ children }: Props) {
  // Left and right actions should have their own fixed-size
  // containers so that the header is always in the center
  return (
    <HeaderContainer>
      {children.leftAction && children.leftAction}
      {children.title && <Title>{children.title}</Title>}
      {children.rightAction && children.rightAction}
    </HeaderContainer>
  );
}
