import React, { FC, PropsWithChildren, useRef } from 'react';
import styled, { css } from 'styled-components';

const active = css`
  opacity: 1;
  pointer-events: auto;
`;

interface IStyledModalContainerProps {
  $visible: boolean;
}

const StyledModalContainer = styled.div<IStyledModalContainerProps>`
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
  ${({ $visible }) => $visible && active};
`;

const StyledModal = styled.div`
  position: relative;
  max-width: 500px;
  min-height: 40vh;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
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
    background-color: ${({ theme }) => theme.colors.text};
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

interface IProps {
  visible: boolean;
  onClose: () => void;
}
export const Modal: FC<PropsWithChildren<IProps>> = ({ visible, onClose, children }) => {
  const ref = useRef(null);

  const handleClickAway: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };
  return (
    <StyledModalContainer onClick={handleClickAway} $visible={visible}>
      <StyledModal ref={ref}>
        <CloseButton onClick={onClose} />
        {children}
      </StyledModal>
    </StyledModalContainer>
  );
};
