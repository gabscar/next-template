// The import below has circular dependency with Theme Context;

import { ThemeType } from './config-interface';
import { defaultThemeConfigs } from './default-config-values';

export const light: ThemeType = {
  ...defaultThemeConfigs,
  title: 'light',

  customColors: {
    ...defaultThemeConfigs.customColors,
    bodyBg: '#F7F7F9',
    appBackground: '#FFF',
    trackBg: '#F2F2F4',
    tooltipBg: '#262732',
    tableHeaderBg: '#F5F5F7',
    divider: '#4c4e641f',
  },
  text: {
    primary: '#4c4e64de',
    secondary: '#4c4e6499',
    disabled: '#4c4e6461',
  },
  action: {
    active: `#4c4e648a`,
    hover: `#4c4e640d`,
    hoverOpacity: 0.05,
    selected: `#4c4e6414`,
    disabled: `#4c4e6442`,
    disabledBackground: `#4c4e641f`,
    focus: `#4c4e641f`,
  },
  img: {
    lightFilter:
      'invert(29%) sepia(35%) saturate(314%) hue-rotate(197deg) brightness(95%) contrast(90%)',
    inactiveFilter:
      'invert(95%) sepia(9%) saturate(94%) hue-rotate(193deg) brightness(92%) contrast(90%)',
    darkFilter:
      'invert(83%) sepia(28%) saturate(28%) hue-rotate(193deg) brightness(98%) contrast(98%)',
  },
};
