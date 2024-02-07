import styled from 'styled-components';
import BaseIcon from '../Base/BaseIcon';
import UberIcon from '../../../assets/uber.png';

const Container = styled.button`
  display: grid;
  grid-template-columns: max-content auto max-content;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  align-items: center;
`;

const TransactionRecipient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
`;

const TransactionAmount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Recipient = styled.div`
  font-weight: bold;
`;

const Area = styled.div`
  color: lightgray;
`;

const Amount = styled.div`
  font-weight: bold;
`;

const Date = styled.div`
  color: lightgray;
`;

const LogoBaseIcon = styled(BaseIcon)`
  img {
    max-width: 60%;
  }
`;

console.log(LogoBaseIcon);

export default function TransactionItem() {
  return (
    <Container>
      <LogoBaseIcon>
        <img src={UberIcon} alt="Logo" />
      </LogoBaseIcon>
      <TransactionRecipient>
        <Recipient>Uber Taxi</Recipient>
        <Area>Transport</Area>
      </TransactionRecipient>
      <TransactionAmount>
        <Amount>$26.87</Amount>
        <Date>4:32 PM</Date>
      </TransactionAmount>
    </Container>
  );
}
