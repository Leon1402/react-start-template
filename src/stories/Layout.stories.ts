import type { Meta } from '@storybook/react';
import '../index.css';
import { OperationCard } from '../components/cardInfo/OperationCard';
import { createRandomOperation } from '../homeworks/ts1/3_write';
import { Layout } from '../components/layout/Layout';

const operation = createRandomOperation('11/12/2023');

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationCard> = {
  title: 'Example/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const OperationCardDefault = {
  args: {
    descr: operation.desc,
    name: operation.name,
    price: operation.amount,
    category: operation.category.name,
    images: ['1', '2', '3', '4'],
  },
};
