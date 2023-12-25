import type { Meta } from '@storybook/react';
import '../index.css';
import { ShortCard } from '../components/cardInfo/ShortCard';
import { createRandomProduct } from '../homeworks/ts1/3_write';

const product = createRandomProduct('11/12/2023');

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ShortCard> = {
  title: 'Example/ShortCard',
  component: ShortCard,
  tags: ['autodocs'],
  argTypes: {
    desc: { defaultValue: product.desc },
    image: { defaultValue: product.photo },
    name: { defaultValue: product.name },
    price: { defaultValue: product.price },
  },
};

export default meta;

export const ShortCardDefault = {
  args: {
    desc: product.desc,
    image: product.photo,
    name: product.name,
    price: product.price,
  },
};
