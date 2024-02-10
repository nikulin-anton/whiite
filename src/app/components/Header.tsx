import styled from 'styled-components';
import BellIcon from '../../assets/bell.svg?react';
import BaseIconButton from './Base/BaseIconButton';
import { User } from '../interfaces/User';

type Props = {
  user: User;
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header({ user }: Props) {
  return (
    <HeaderContainer>
      <BaseIconButton>
        <img src={user.avatarUrl} alt="User" />
      </BaseIconButton>
      <BaseIconButton>
        <BellIcon />
      </BaseIconButton>
    </HeaderContainer>
  );
}
