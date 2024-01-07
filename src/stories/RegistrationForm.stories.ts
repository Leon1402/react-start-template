import type { Meta } from '@storybook/react';
import '../index.css';
import { RegistrationForm } from '../components/forms/RegistrationForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RegistrationForm> = {
  title: 'Example/RegistrationForm',
  component: RegistrationForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const OperationCardDefault = {};
