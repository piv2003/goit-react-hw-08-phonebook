import { Field, Form } from 'formik';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 30px;
  color: #f3cefa;
  text-shadow: 2px 2px #000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormBox = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  animation: ${fadeIn} 0.5s ease;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
`;

export const Text = styled.span`
  display: flex;
  gap: 5px;
  align-items: end;
  justify-content: center;
  margin-bottom: 10px;

  font-size: 1.2rem;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;

  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;

  &::placeholder {
    font-size: 15px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const ErrorMessageText = styled.p`
  text-align: center;
  margin-top: 10px;

  color: red;
  font-size: 17px;
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

export const SubmitButton = styled.button`
  color: #daee66;
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
  background: radial-gradient(circle, #eb8ed7, #f7f8c4);
  background-clip: padding-box;
  transition: background-image 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: radial-gradient(circle, #d3e680, #f1c1bc);
    color: #750575;
    transform: scale(1.1);
  }

  &:active {
    animation: ${clickEffect} 1.2s;
  }
`;
