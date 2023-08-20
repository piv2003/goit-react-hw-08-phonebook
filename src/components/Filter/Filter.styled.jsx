import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-right: 10px;
    padding: 5px;
    font-size: 20px;
    color: #f1bc49;
    background: rgba(3, 60, 146, 0.3);
    border-radius: 15px;
    text-shadow: 2px 3px 2px #474747;
  }
`;

export const InputFilter = styled.input`
  padding: 0 20px;
  background: rgba(255, 250, 250, 0.4);
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;

  &::-webkit-input-placeholder {
    /* WebKit browsers */
    color: rgba(255, 255, 0, 0.5);
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 0, 0.5);
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 0, 0.5);
  }

  &:focus {
    outline: none;
    border: solid 2px #560bad;
  }
`;
