import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

type Props = { children: ReactNode } & LinkProps;

const StyledLink = styled(Link)`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export default function BaseLink(props: Props) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}
