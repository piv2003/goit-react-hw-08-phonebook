import styled from 'styled-components';

export const Wrapper = styled.div`
  gap: 20px;

  & b {
    font-size: 20px;
    color: red;
    text-shadow: 2px 2px #000;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 45vh);
  grid-template-rows: repeat(3, 70px);
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 50px;
  color: #fff;
  background: rgba(238, 95, 202, 0.3);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
