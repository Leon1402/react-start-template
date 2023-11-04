import React from 'react';
import styled from 'styled-components';
import { Header } from '../header/Header';

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 5000px;
`;

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
    </LayoutContainer>
  );
};
