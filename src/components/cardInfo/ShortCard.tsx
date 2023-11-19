import React, { FC } from 'react';
import styled from 'styled-components';
import { AddToCartButton } from '../buttons/AddToCartButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  background-color: white;
  max-width: 250px;
  border-radius: 10px;
`;

const Image = styled.img`
  margin-bottom: 10px;
`;

const Price = styled.span`
  margin-bottom: 10px;
`;

const Name = styled.span`
  margin-bottom: 10px;
`;

const Description = styled.span`
  margin-bottom: 10px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface IProps {
  price: number;
  name: string;
  descr: string;
  image: string;
}

export const ShortCard: FC<IProps> = ({ price, name, descr, image }) => {
  return (
    <Container>
      <Image src={image} alt="card image" />
      <Price>Цена: {price}</Price>
      <Name>Название: {name}</Name>
      <Description>{descr}</Description>
      <AddToCartButton counter={0} />
    </Container>
  );
};
