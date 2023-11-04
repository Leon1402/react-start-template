import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  visible: boolean;
}

const active = css`
  opacity: 1;
  pointer-events: auto;
`;

const StyledModalContainer = styled.div<IProps>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-out;
  opacity: 0;
  pointer-events: none;
  ${({ visible }) => visible && active};
`;

const StyledModal = styled.div`
  position: relative;
  max-width: 500px;
  min-height: 40vh;
  width: 100%;
  padding: 10px;
  background-color: white;
  box-shadow: 1px 1px 10px black;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  background: none;
  border: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 0.5;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: black;
    left: 50%;
    top: 0px;
    width: 2px;
    bottom: 0;
  }
  &::before {
    transform: translateX(-50%) rotate(-45deg);
  }
  &::after {
    transform: translateX(-50%) rotate(45deg);
  }
`;

export const Modal: FC<PropsWithChildren<IProps>> = ({ visible, children }) => {
  return (
    <StyledModalContainer visible={visible}>
      <StyledModal>
        <CloseButton />
        {children}
      </StyledModal>
    </StyledModalContainer>
  );
};
