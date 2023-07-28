// ** MUI Theme Provider
import { deepmerge } from '@mui/utils';
import { ThemeOptions } from '@mui/material';

import UserThemeOptions from '../layouts/UserThemeOptions';

import { Settings } from '@core/context/settingsContext';

import palette from './palette';
import spacing from './spacing';
import shadows from './shadows';
import breakpoints from './breakpoints';

const themeOptions = (settings: Settings): ThemeOptions => {
  const { skin, mode, direction, themeColor } = settings;

  const userThemeConfig: any = Object.assign({}, UserThemeOptions());

  const userFontFamily = userThemeConfig.typography?.fontFamily;

  delete userThemeConfig.components;
  delete userThemeConfig.typography;

  const mergedThemeConfig = deepmerge(
    {
      direction,
      palette: palette(mode === 'semi-dark' ? 'light' : mode, skin),
      typography: {
        fontFamily:
          userFontFamily ||
          [
            'Inter',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
      },
      shadows: shadows(mode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 10,
      },
      mixins: {
        toolbar: {
          minHeight: 64,
        },
      },
    },
    userThemeConfig,
  );

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette[themeColor],
      },
    },
  });
};

export default themeOptions;
