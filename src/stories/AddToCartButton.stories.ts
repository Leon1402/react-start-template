import type { Meta } from '@storybook/react';
import { AddToCartButton } from '../components/buttons/AddToCartButton';
import '../index.css';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddToCartButton> = {
  title: 'Example/AddToCartButton',
  component: AddToCartButton,
  tags: ['autodocs'],
  argTypes: {
    counter: {
      defaultValue: 0,
    },
  },
};

export default meta;

export const Button = {
  args: {
    counter: 0,
  },
};

export const InputWithCounter = {
  args: {
    counter: 1,
  },
};
