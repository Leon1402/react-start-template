import 'styled-components';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export interface ITheme {
  type: Theme;
  colors: {
    background: string;
    text: string;
  };
}
