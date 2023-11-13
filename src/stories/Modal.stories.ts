import type { Meta } from '@storybook/react';
import { Modal } from '../components/modal/Modal';
import '../index.css';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    visible: { defaultValue: true },
    children: { input: 'test' },
  },
};

export default meta;

export const ModalOpen = {
  args: {
    visible: true,
    children: 'test',
  },
};
