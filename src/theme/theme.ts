import { ITheme, Theme } from './types';

export const darkTheme: ITheme = {
  type: Theme.light,
  colors: {
    text: '#fff',
    background: '#333',
  },
};

export const lightTheme: ITheme = {
  type: Theme.dark,
  colors: {
    background: '#fff',
    text: '#333',
  },
};
