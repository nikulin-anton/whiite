import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import BellIcon from '../../../assets/bell.svg?react';
import ArrowRight from '../../../assets/arrow-right.svg?react';
import ArrowAltFromBottom from '../../../assets/arrow-alt-from-bottom.svg?react';
import PlusSmall from '../../../assets/plus-small.svg?react';

type Props = {
  imageUrl?: string;
  icon?: string;
} & ComponentPropsWithoutRef<'button'>;

const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 0;
  background-color: #f5f5f5;
  border-radius: 16px;
  border: none;
  outline: none;
  background-size: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default function BaseIconButton({
  imageUrl,
  icon,
  children,
  ...buttonProps
}: Props) {
  return (
    <StyledButton {...buttonProps}>
      {imageUrl && <StyledImage src={imageUrl} />}
      {icon && (
        <StyledIconContainer>
          {icon === 'bell' && <BellIcon />}
          {icon === 'arrow-right' && <ArrowRight />}
          {icon === 'arrow-alt-from-bottom' && <ArrowAltFromBottom />}
          {icon === 'plus-small' && <PlusSmall />}
        </StyledIconContainer>
      )}
    </StyledButton>
  );
}
