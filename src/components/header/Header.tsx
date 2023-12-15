import React from 'react';
import styled from 'styled-components';
import { Logo } from './logo/Logo';
import { AddToCartButton } from '../buttons/AddToCartButton';
import { ChangeLanguageButton } from '../buttons/ChangeLanguageButton';
import { ChangeThemeButton } from '../buttons/ChangeThemeButton';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <AddToCartButton counter={1} />
      <ChangeLanguageButton />
      <ChangeThemeButton />
    </StyledHeader>
  );
};
