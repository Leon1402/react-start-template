import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const buttonStyle = css`
  background-color: #4f4fdd;
  color: white;
  transition: all 0.3s ease-out;
  border: 1px solid #4f4fdd;
  &:hover {
    background-color: white;
    color: #4f4fdd;
  }
`;

const StyledButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  ${buttonStyle}
`;

const Container = styled.div`
  display: flex;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CounterInput = styled.input`
  width: 50px;
`;
const CounterButton = styled.button`
  ${buttonStyle}
  padding: 3px;
  line-height: 0.7;
`;

const Button = () => <StyledButton>add to cart</StyledButton>;
const InputWithCounter = () => (
  <Container>
    <CounterInput value={10} />
    <ButtonsContainer>
      <CounterButton>+</CounterButton>
      <CounterButton>-</CounterButton>
    </ButtonsContainer>
  </Container>
);

interface Iprops {
  counter: number;
}
export const AddToCartButton: FC<Iprops> = ({ counter }) => {
  return counter ? <InputWithCounter /> : <Button />;
};
