import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  & :hover {
    background-color: pink;
    border-radius: 15px;
  }
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;
