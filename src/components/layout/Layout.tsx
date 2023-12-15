import React from 'react';
import styled from 'styled-components';
import { Header } from '../header/Header';
import { BasketProducts } from '../basketProducts/BasketProducts';
import { ModalViewer } from '../modal/modalView';

const LayoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 5000px;
`;

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <ModalViewer />
      <BasketProducts />
    </LayoutContainer>
  );
};
