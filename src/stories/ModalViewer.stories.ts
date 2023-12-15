import type { Meta } from '@storybook/react';
import '../index.css';
import { ModalViewer } from '../components/modal/modalView';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalViewer> = {
  title: 'Example/ModalViewer',
  component: ModalViewer,
  tags: ['autodocs'],
};

export default meta;

export const ModalViewerStories = {};
