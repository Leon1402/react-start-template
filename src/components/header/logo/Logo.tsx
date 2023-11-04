import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const Logo = () => {
  return <StyledLogo />;
};
