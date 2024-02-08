import styled from 'styled-components';
import VisaIcon from '../../../assets/visa.svg?react';

type Props = {
  number: string;
  balance: number;
  currency: string;
};

const CardItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content;
  align-items: center;
  min-width: 91%;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 24px;
  background-color: #ffefe2;
  padding: 35px 32px 24px;
  max-width: 300px;
  aspect-ratio: 1.9;

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
  font-size: 20px;
  font-weight: bold;
  text-align: right;
`;

const Amount = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
`;

const Currency = styled.div`
  position: relative;
  font-size: 37px;
  bottom: 4px;
  margin-right: 4px;
  font-family: Arial, sans-serif;
  font-weight: normal;
`;

const Mask = styled.span`
  margin-right: 4px;
`;

const formatter = new Intl.NumberFormat('en-US');

export default function Card({ number, balance, currency }: Props) {
  return (
    <CardItem>
      <StyledVisaIcon />
      <CardNumber>
        <Mask>&bull; &bull; &bull; &bull;</Mask> {number}
      </CardNumber>
      <Amount>
        <Currency>{currency}</Currency>
        {formatter.format(balance)}
      </Amount>
    </CardItem>
  );
}
