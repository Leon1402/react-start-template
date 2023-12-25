import React, { FC } from 'react';
import styled from 'styled-components';
import { AddToCartButton } from '../buttons/AddToCartButton';
import { useTranslation } from 'react-i18next';
import { TOperation } from '../../homeworks/ts1/3_write';

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
  desc?: string;
  image: string;
}

export const ShortCard: FC<IProps> = (props) => {
  const { price, name, desc, image } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <Image src={image} alt="card image" />
      <Price>
        {t`text.price`}: {price}
      </Price>
      <Name>
        {t`text.name`}: {name}
      </Name>
      <Description>{desc}</Description>
      <AddToCartButton counter={0} />
    </Container>
  );
};
