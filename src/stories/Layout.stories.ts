import type { Meta } from '@storybook/react';
import '../index.css';
import { OperationCard } from '../components/cardInfo/OperationCard';
import { Layout } from '../components/layout/Layout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationCard> = {
  title: 'Example/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const OperationCardDefault = {};
