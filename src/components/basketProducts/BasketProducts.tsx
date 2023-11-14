import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const DeleteButton = styled.button`
  padding: 10px;
  background-color: red;
  color: white;
  border-radius: 10px;
`;

export const BasketProducts = () => {
  return (
    <Container>
      <h2>Basket Products</h2>
      <DeleteButton>Delete</DeleteButton>
    </Container>
  );
};
