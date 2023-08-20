import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  text-align: center;
  height: 100vh;

  & h1,
  h2 {
    animation: flicker 0.5s infinite alternate;
    color: #fff;
  }
  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }
    10%,
    20%,
    24%,
    35%,
    55% {
      text-shadow: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const Text = styled.h2`
  font-size: 30px;
`;

export const Empty = styled.p`
  font-weight: bold;
  @-webkit-keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  @keyframes pulsate {
    50% {
      color: #d60bf1;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  color: rgb(245, 245, 245);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  background: radial-gradient(#42024e, #fdfa4c);
  border-radius: 7px;
  -webkit-animation: pulsate 2.2s linear infinite;
  animation: pulsate 2.2s linear infinite;
`;
