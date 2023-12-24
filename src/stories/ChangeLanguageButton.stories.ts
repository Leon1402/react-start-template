import type { Meta } from '@storybook/react';
import { ChangeLanguageButton } from '../components/buttons/ChangeLanguageButton';
import '../index.css';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ChangeLanguageButton> = {
  title: 'Example/ChangeLanguageButton',
  component: ChangeLanguageButton,
  tags: ['autodocs'],
};

export default meta;

export const ChangeLanguageButtonDafault = {};
