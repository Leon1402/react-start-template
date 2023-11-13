import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const buttonStyle = css`
  transition: all 0.3s ease-out;
  padding: 10px;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border-radius: 10px;
  ${buttonStyle}
  background: #005bff;
  color: white;
  &:hover {
    background: #005bdd;
  }
`;

const Container = styled.div`
  display: flex;
`;

const CounterInput = styled.input`
  width: 30px;
  text-align: center;
  border: none;
  border: 1px solid rgba(0, 150, 255, 0.08);
  border-left: none;
  border-right: none;
`;
const CounterButton = styled.button<{ $left?: boolean }>`
  ${buttonStyle}
  color: #005bff;
  background: rgba(0, 150, 255, 0.08);
  &:hover {
    background: rgba(0, 150, 255, 0.2);
  }
  padding: 10px;
  ${({ $left }) =>
    $left
      ? {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }
      : {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
`;

const Button = () => <StyledButton>add to cart</StyledButton>;
const InputWithCounter = () => (
  <Container>
    <CounterButton $left>-</CounterButton>
    <CounterInput defaultValue={10} />
    <CounterButton>+</CounterButton>
  </Container>
);

interface Iprops {
  counter: number;
}
export const AddToCartButton: FC<Iprops> = ({ counter }) => {
  return counter ? <InputWithCounter /> : <Button />;
};
