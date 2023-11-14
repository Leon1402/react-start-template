import type { Meta } from '@storybook/react';
import '../index.css';
import { BasketProducts } from '../components/basketProducts/BasketProducts';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BasketProducts> = {
  title: 'Example/BasketProducts',
  component: BasketProducts,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

export const BasketProductsDefault = {}