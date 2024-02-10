import styled from 'styled-components';

const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #bbd6ff;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function BaseLoader() {
  return <Loader />;
}
