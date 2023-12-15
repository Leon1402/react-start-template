import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <Container>
      <h2>{t`titles.basket`}</h2>
      <DeleteButton>{t`buttons.delete`}</DeleteButton>
    </Container>
  );
};
