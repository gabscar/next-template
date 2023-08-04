import { PaletteMode } from '@mui/material';

import 'styled-components';

export type ThemeType = {
  title: PaletteMode;
  customColors: {
    dark: string;
    main: string;
    light: string;
    bodyBg: string;
    appBackground: string;
    trackBg: string;
    tooltipBg: string;
    tableHeaderBg: string;
    divider: string;
  };
  action: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  img: {
    lightFilter: string;
    inactiveFilter: string;
    darkFilter: string;
  };
  font: {
    family: string;
    light: number;
    medium: number;
    bold: number;
    mediumBold: number;
    extraBold: number;
    fontStyle: {
      normal: string;
    };
    sizes: {
      xxxxxsmall: string;
      xxxxsmall: string;
      xxxxsmall2: string;
      xxxsmall: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      big: string;
      xbig: string;
      large: string;
      xlarge: string;
    };
  };

  spacings: {
    xxxsmall: string;
    xxsmall: string;
    xsmall: string;
    small: string;
    xmedium?: string;
    medium: string;
    large: string;
    mlarge?: string;
    xlarge: string;
    xxlarge?: string;
  };

  input: {
    sizes: {
      xxxsmall: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      xmedium: string;
      medium: string;
      large: string;
      mlarge: string;
      xlarge: string;
    };
  };
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
