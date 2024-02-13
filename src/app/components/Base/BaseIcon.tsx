import styled from 'styled-components';

export const ICON_SIZE = 60;
const SVG_SIZE = 24;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  background-color: #f5f5f5;
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
  children?: React.ReactNode;
  className?: string;
};

export default function BaseIcon(props: Props) {
  return <Container className={props.className}>{props.children}</Container>;
}
