import React from 'react';
import styled from 'styled-components';
import { InputField } from '../inputs/InputField';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { EOperation } from '../../homeworks/ts1/3_write';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: center;
`;

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  border-radius: 5px;
`;

interface IFormInput {
  price: number;
  name: string;
  desc: string;
  category: string;
  type: EOperation;
  file: FileList;
}

const schema = yup.object({
  price: yup.number().positive().required('required'),
  name: yup.string().required('required'),
  desc: yup.string(),
  category: yup.string().required('required'),
  type: yup.number(),
  file: yup.mixed(),
});

interface IProps {
  values?: IFormInput;
}

export const AddOperationForm: React.FC<IProps> = ({ values }) => {
  const { t } = useTranslation();

  const buttonText = values ? t`buttons.edit` : t`buttons.add`;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: values,
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  console.log(errors);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h3>{buttonText}</h3>
      <InputField error={errors?.name} type="text" name="name" register={register} />
      <InputField
        error={errors?.price}
        type="number"
        name="price"
        register={register}
        min={0}
        defaultValue={values && 0}
      />
      <InputField error={errors?.desc} type="text" name="desc" register={register} />
      <InputField error={errors?.category} type="text" name="category" register={register} />
      <select name="type" defaultValue={EOperation.Cost} {...register('type')}>
        {(Object.keys(EOperation).filter((v) => isNaN(Number(v))) as Array<keyof typeof EOperation>).map((key) => (
          <option key={key} value={EOperation[key]}>
            {key}
          </option>
        ))}
      </select>

      <input type="file" {...register('file')} />
      <StyledButton type="submit">{buttonText}</StyledButton>
    </StyledForm>
  );
};
