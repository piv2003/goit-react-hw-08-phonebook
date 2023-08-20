import styled, { keyframes } from 'styled-components';
import { ImSpinner4 } from 'react-icons/im';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  font-size: 30px;
  font-weight: 700;
  background: transparent;
  color: #000;
  border: solid 2px #ad0bad;
  border-radius: 50%;
`;

const spin = keyframes`
0% {
  transform: rotate(360deg);
}
100% {
  transform: rotate(3turn);
}
`;

export const Spinner = styled(ImSpinner4)`
  animation: ${spin} 0.85s linear infinite;
`;
Spinner.defaultProps = {
  size: 35,
};

export const ContactInfo = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const ButtonChange = styled.button`
  padding: 5px;
  border-color: #000000;
  border-radius: 50%;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: yellow;
    cursor: pointer;
  }
  &:hover svg {
    fill: #d30aee;
    cursor: pointer;
  }
  & svg {
    fill: #000000;
    transition: fill 0.2s ease;
  }
`;

export const ButtonDelete = styled.button`
  padding: 5px;
  border-color: #000000;
  border-radius: 50%;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: red;
    cursor: pointer;
  }
  &:hover svg {
    fill: red;
    cursor: pointer;
  }
  & svg {
    fill: #000000;
    transition: fill 0.2s ease;
  }
`;

export const Name = styled.span`
  color: #9dfa72;
  font-weight: 500;
  font-size: 20px;
`;

export const Number = styled.span`
  color: #f1fabc;
  font-weight: 500;
  font-size: 20px;
`;
