import { Mode, Skin } from '../../@core/layouts/types';

type ThemeConfig = {
  skin: Skin;
  mode: Mode;
  responsiveFontSizes: boolean;
};

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  responsiveFontSizes: true,
  mode: 'light' as Mode /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  skin: 'default' /* default | bordered */,
};

export default themeConfig;
