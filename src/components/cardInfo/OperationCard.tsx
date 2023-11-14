import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { AddToCartButton } from '../buttons/AddToCartButton';

const mb10 = css`
  margin-bottom: 10px;
`;

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

const ImagesConatainer = styled.div`
  ${mb10}
  width: 100%;
  border: 1px solid red;
  height: 120px;
  display: flex;
  flex-direction: column;
`;

const MainImage = styled.img`
  width: 100%;
  border: 1px solid red;
  height: 70%;
`;

const OtherImagesContainer = styled.div`
  display: flex;
  height: 30%;
`

const Image = styled.img`
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;

const Price = styled.span`
  ${mb10}
`;

const Name = styled.span`
  ${mb10}
`;

const Description = styled.span`
  ${mb10}
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface IProps {
  price: number;
  name: string;
  descr: string;
  category: string;
  images: string[];
}

export const OperationCard: FC<IProps> = ({ price, name, descr, category, images }) => {
  const [mainImage, ...otherImages] = images;
  return (
    <Container>
      <ImagesConatainer>
        <MainImage src={mainImage} alt={mainImage} />
        <OtherImagesContainer>
          {otherImages.map((image, index) => (
            <Image key={index} src={image} alt={image} />
          ))}
        </OtherImagesContainer>
      </ImagesConatainer>
      <Description>{category}</Description>
      <Name>{name}</Name>
      <Description>{descr}</Description>
      <Price>{price}</Price>
      <AddToCartButton counter={0} />
    </Container>
  );
};
