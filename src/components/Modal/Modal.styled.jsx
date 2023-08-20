import { Form, Field, Formik } from 'formik';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: -55px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const FormikWrapper = styled(Formik)``;

export const Title = styled.h3`
  font-size: 25px;
  font-weight: normal;
  color: #dd37f3;
  text-shadow: 1px 1px #000;
`;

export const FormBox = styled(Form)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 400px;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
  background: #f7f6eb;
  border-radius: 30px;

  & label {
    display: flex;
    flex-direction: column;
    width: 100%;

    & span {
      margin-bottom: 5px;
      font-size: 20px;
      text-shadow: 1px 1px 1px #cccccc, 0 2px 0 #c9c9c9;
    }
  }
`;

export const InputName = styled(Field)`
  padding: 0 20px;
  background: #f3edc5;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #07eb40;

  &:focus {
    outline: none;
    border: solid 2px #640aca;
  }
`;

export const InputTel = styled(InputName)``;

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

export const Button = styled.button`
  color: #7c240e;
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
  transition: background-image 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: radial-gradient(circle, #6fd2f0, #eee56d);
    color: #065a03;
    transform: scale(1.1);
  }

  &:active {
    animation: ${clickEffect} 1.2s;
  }
`;

export const Message = styled.p`
  color: red;
`;
