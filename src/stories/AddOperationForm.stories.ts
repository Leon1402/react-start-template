import type { Meta } from '@storybook/react';
import '../index.css';
import { AddOperationForm } from '../components/forms/AddOperationForm';
import { createRandomOperation } from '../homeworks/ts1/3_write';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddOperationForm> = {
  title: 'Example/AddOperationForm',
  component: AddOperationForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

const operation = createRandomOperation('11/12/2023');

export const AddOperationFormDefault = {
  args: {
    values: {
      desc: operation.desc,
      name: operation.name,
      price: operation.amount,
      category: operation.category.name,
    },
  },
};

export const EditOperationFormDefault = {
};

