import React from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: red;
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: FieldError;
  name: string;
  register: UseFormRegister<FieldValues>;
}

export const InputField: React.FC<IProps> = ({ type, name, error, register, ...props }) => {
  const { t } = useTranslation();

  return (
    <StyledLabel>
      {t(`forms.${name}.title`)}
      <StyledInput type={type} {...register(name)} {...props} />
      {error && <StyledError>{t(`forms.${name}.errors.${error.message}`)}</StyledError>}
    </StyledLabel>
  );
};
