import React from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../localization';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5%;
  padding: 5px;
`;

export const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;

  return <StyledButton onClick={() => i18n.changeLanguage(lang)}>{lang}</StyledButton>;
};
