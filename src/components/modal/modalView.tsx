import React, { useState } from 'react';
import { Modal } from './Modal';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ModalViewer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const { t } = useTranslation();

  const onClose = () => {
    setIsModalOpen(false);
  };
  const handleButton = () => {
    setIsModalOpen(true);
  };

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setModalContent(e.target.value);
  };

  return (
    <StyledContainer>
      <input onChange={handleInput} placeholder={t`text.modalInputPlaceholder`} />
      <button onClick={handleButton}>{t`buttons.openModal`}</button>
      <Modal visible={isModalOpen} onClose={onClose}>
        {modalContent}
      </Modal>
    </StyledContainer>
  );
};
