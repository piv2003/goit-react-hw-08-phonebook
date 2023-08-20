import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: -1px;
  padding: 3px 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  & a {
    color: #fff;
    transition: border-radius 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
    & svg {
      display: none;
      transition: display0.2s ease;
    }
  }

  & a.active {
    padding: 5px;
    color: rgb(0, 0, 0);
    border-radius: 15px;
    background: rgba(227, 227, 227, 0.3);
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }

  & a.active svg {
    display: block;
  }
`;
