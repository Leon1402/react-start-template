import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../theme/ThemeProvider';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5%;
  padding: 5px;
`;

export const ChangeThemeButton = () => {
  const { changeTheme } = useThemeContext();
  const { t } = useTranslation();

  return <StyledButton onClick={changeTheme}>{t`buttons.changeTheme`}</StyledButton>;
};
