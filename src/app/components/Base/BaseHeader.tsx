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
`;

const ActionContainer = styled.div`
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
`;

export default function BaseHeader({ children }: Props) {
  return (
    <HeaderContainer>
      <ActionContainer>
        {children.leftAction && children.leftAction}
      </ActionContainer>

      {children.title && <Title>{children.title}</Title>}

      <ActionContainer>
        {children.rightAction && children.rightAction}
      </ActionContainer>
    </HeaderContainer>
  );
}
