import type { Meta } from '@storybook/react';
import '../index.css';
import { AuthForm } from '../components/forms/AuthForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AuthForm> = {
  title: 'Example/AuthForm',
  component: AuthForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const OperationCardDefault = {};
