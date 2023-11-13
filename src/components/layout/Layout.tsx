import React from 'react';
import styled from 'styled-components';
import { Header } from '../header/Header';
import { ShortCard } from '../cardInfo/ShortCard';
import { createRandomOperation, createRandomProduct } from '../../homeworks/ts1/3_write';
import { OperationCard } from '../cardInfo/OperationCard';

const LayoutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 5000px;
`;

export const Layout = () => {
  const product = createRandomProduct('11/12/2023');
  const operation = createRandomOperation('11/12/2023');

  console.log(operation);

  return (
    <LayoutContainer>
      <Header />
      <ShortCard descr={product.desc} name={product.name} price={product.price} image={product.photo} />
      <OperationCard descr={operation.desc} name={operation.name} price={operation.amount} />
    </LayoutContainer>
  );
};
