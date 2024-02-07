import styled from 'styled-components';
import VisaIcon from '../../../assets/visa.svg?react';

type Props = {
  number: string;
  balance: number;
  paymentNetwork: string;
  currency: string;
};

const CardItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  aspect-ratio: 86 / 54;
  min-width: 100%;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 24px;
  background-color: #ffefe2;
  padding: 30px;

  path {
    fill: #000;
  }

  & + & {
    margin-left: 16px;
  }
`;

const StyledVisaIcon = styled(VisaIcon)`
  max-width: 48px;
  max-height: 16px;
`;

const CardNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: right;
`;

const Amount = styled.div`
  display: flex;
  align-items: end;
  font-size: 28px;
  font-weight: bold;
`;

const Currency = styled.div`
  position: relative;
  font-size: 24px;
  bottom: 2px;
  margin-right: 4px;
`;

export default function Card({
  number,
  balance,
  paymentNetwork,
  currency,
}: Props) {
  return (
    <CardItem>
      <StyledVisaIcon />
      <CardNumber>**** {number}</CardNumber>
      <Amount>
        <Currency>$</Currency>
        {balance}
      </Amount>
    </CardItem>
  );
}
