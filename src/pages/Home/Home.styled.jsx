import styled, { keyframes } from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  max-width: 500px;
  font-size: 35px;
  color: white;
  border: solid 2px #f31df3;
  border-radius: 15px;
  background: rgba(247, 244, 244, 0.2);
  box-shadow: rgb(200, 200, 200) 19px 19px 35px,
    rgb(254, 254, 254) -19px -19px 35px;
  animation: 0.3s ease 0s 0.5 normal none running jgQpwH;
  animation: flicker 0.3s infinite alternate;
  color: #fff;

  & a {
    padding: 5px;
    border: solid 1px #ce0d0d;
    border-radius: 15px;
    background: rgba(254, 254, 254, 0.3);
    font-weight: 500;
  }

  & span {
    display: table;
    margin: 0 auto;
    font-family: "Roboto Slab";
    font-weight: 700;
    font-size: 40px;    
    background: linear-gradient(330deg, #e05252 0%, #99e052 25%, #52e0e0 50%, #d3eb6b 75%, #e05252 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    
  }
  /* @keyframes flicker {
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
    } */
  }
`;

const clickEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonRegistr = styled.button`
  color: #a3f1f7;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 25px;
  text-shadow: 1px 1px #000;
  line-height: normal;
  margin: 20px;
  border: 2px solid pink;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 10px, rgba(0, 0, 0, 0.12) 0px -3px 5px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 3px 5px,
    rgba(0, 0, 0, 0.09) 0px -3px 2px;
  background: radial-gradient(circle, #f1e4e2, #eb27eb);
  background-clip: padding-box;
  transition: background-image 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: radial-gradient(circle, #6fd2f0, #eee56d);
    color: #065a03;
    transform: scale(1.1);
  }

  &:active {
    animation: ${clickEffect} 1.2s;
  }
`;

export const ButtonLogIn = styled.button`
  color: #373af8;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 25px;
  text-shadow: 1px 1px #000;
  line-height: normal;
  margin: 20px;
  border: 2px solid pink;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 10px, rgba(0, 0, 0, 0.12) 0px -3px 5px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 3px 5px,
    rgba(0, 0, 0, 0.09) 0px -3px 2px;
  background: radial-gradient(circle, #f1c1bc, #a702a7);
  background-clip: padding-box;
  transition: background-image 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: radial-gradient(circle, #412eee, #f1edaf);
    color: #92f08f;
    transform: scale(1.1);
  }

  &:active {
    animation: ${clickEffect} 0.3s;
  }
`;

export const Message = styled.p`
  color: red;
`;
