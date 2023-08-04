// ** Type Imports
import { Skin } from '@core/layouts/types';
import { PaletteMode } from '@mui/material';
import { DefaultTheme } from 'styled-components';

const DefaultPalette = (mode: PaletteMode, skin: Skin, theme: DefaultTheme) => {
  // ** Vars
  const whiteColor = '#FFF';

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor;
    } else if (skin === 'bordered' && mode === 'dark') {
      return '#30334E';
    } else if (mode === 'light') {
      return '#F7F7F9';
    } else return '#282A42';
  };

  return {
    customColors: {
      dark: theme.customColors.dark,
      main: theme.customColors.main,
      light: theme.customColors.light,
      bodyBg: theme.customColors.bodyBg,
      trackBg: theme.customColors.trackBg,
      tooltipBg: theme.customColors.tooltipBg,
      tableHeaderBg: theme.customColors.tableHeaderBg,
    },
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor,
    },
    primary: {
      light: '#787EFF',
      main: '#666CFF',
      dark: '#5A5FE0',
      contrastText: whiteColor,
    },
    secondary: {
      light: '#7F889B',
      main: '#6D788D',
      dark: '#606A7C',
      contrastText: whiteColor,
    },
    error: {
      light: '#ff8983',
      main: '#FF4D49',
      dark: '##dc393d',
      contrastText: whiteColor,
    },
    warning: {
      light: '#ffb445',
      main: '#F08406',
      dark: '#b75600',
      contrastText: whiteColor,
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
      contrastText: whiteColor,
    },
    success: {
      light: '#8fdc80',
      main: '#5EAA52',
      dark: '#2c7a26',
      contrastText: whiteColor,
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161',
    },
    text: {
      primary: theme.text.primary,
      secondary: theme.text.secondary,
      disabled: theme.text.disabled,
    },
    divider: theme.customColors.divider,
    background: {
      paper: theme.customColors.appBackground,
      default: defaultBgColor(),
    },
    action: {
      active: theme.action.active,
      hover: theme.action.hover,
      hoverOpacity: theme.action.hoverOpacity,
      selected: theme.action.selected,
      disabled: theme.action.disabled,
      disabledBackground: theme.action.disabledBackground,
      focus: theme.action.focus,
    },
  };
};

export default DefaultPalette;
