import type { Meta } from '@storybook/react';
import { ChangeThemeButton } from '../components/buttons/ChangeThemeButton';
import '../index.css';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ChangeThemeButton> = {
  title: 'Example/ChangeThemeButton',
  component: ChangeThemeButton,
  tags: ['autodocs'],
};

export default meta;

export const ChangeThemeButtonDafault = {};
