/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */

// ** MUI Imports
import { Direction } from '@mui/material';

// ** Types
import {
  AppBar,
  ContentWidth,
  Footer,
  HorizontalMenuToggle,
  Mode,
  Skin,
  VerticalNavToggle,
} from '../../@core/layouts/types';

type ThemeConfig = {
  skin: Skin;
  mode: Mode;
  appBar: AppBar;
  footer: Footer;
  navHidden: boolean;
  appBarBlur: boolean;
  direction: Direction;
  templateName: string;
  navCollapsed: boolean;
  routingLoader: boolean;
  disableRipple: boolean;
  navigationSize: number;
  navSubItemIcon: string;
  menuTextTruncate: boolean;
  contentWidth: ContentWidth;
  disableCustomizer: boolean;
  responsiveFontSizes: boolean;
  collapsedNavigationSize: number;
  horizontalMenuAnimation: boolean;
};

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  templateName: 'Simples Assim' /* App Name */,

  mode: 'light' as Mode /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  direction: 'ltr' /* ltr | rtl */,
  skin: 'default' /* default | bordered */,
  contentWidth: 'boxed' /* full | boxed */,
  footer: 'static' /* fixed | static | hidden */,

  // ** Routing Configs
  routingLoader: true /* true | false */,

  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: 'mdi:circle' /* Icon */,

  navCollapsed:
    false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize: 260 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 68 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,

  horizontalMenuAnimation: true /* true | false */,

  // ** AppBar Configs
  appBar:
    'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarBlur: true /* true | false */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
  disableCustomizer: true /* true | false */,
};

export default themeConfig;
