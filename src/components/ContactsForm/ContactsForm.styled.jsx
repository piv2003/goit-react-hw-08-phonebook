import { Form, Field, Formik } from 'formik';
import styled, { keyframes } from 'styled-components';

export const FormikWrapper = styled(Formik)``;

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
  background: rgba(150, 150, 150, 0.3);
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 10px, rgba(0, 0, 0, 0.12) 0px -3px 5px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 3px 5px,
    rgba(0, 0, 0, 0.09) 0px -3px 2px;

  & label {
    display: flex;
    flex-direction: column;
    width: 100%;

    & span {
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: 700;
      color: #300101;
      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #f5eeee, 0 3px 0 #bbb,
        0 2px 0 #f7f1f1, 0 2px 0 #ece8e8, 0 2px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const InputName = styled(Field)`
  padding: 0 20px;
  margin-bottom: 10px;
  background: rgba(150, 150, 150, 0.3);
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border: solid 2px #560bad;
  }

  &::-webkit-input-placeholder {
    /* WebKit browsers */
    color: rgba(255, 255, 255, 0.5);
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, 0.5);
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, 0.5);
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
  color: #373af8;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 17px;
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
  transition: background-image 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: radial-gradient(circle, #b8f3b8, #f1edaf);
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
