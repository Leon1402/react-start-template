import type { Meta } from '@storybook/react';
import '../index.css';
import { ProductCard } from '../components/cardInfo/ProductCard';
import { createRandomOperation } from '../homeworks/ts1/3_write';

const operation = createRandomOperation('11/12/2023');

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCard> = {
  title: 'Example/OperationCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    descr: { defaultValue: operation.desc },
    category: { defaultValue: operation.category.name },
    name: { defaultValue: operation.name },
    price: { defaultValue: operation.amount },
    images: { defaultValue: ['1', '2', '3', '4'] },
  },
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
