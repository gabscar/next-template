import { ReactNode } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeProvider,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { Settings } from '@core/context/settingsContext';
import typography from './typography';
import themeOptions from './ThemeOptions';
import GlobalStyling from './globalStyles';
import themeConfig from '@src/lib/config/themeConfig';
import UserThemeOptions from '@src/@core/theme/UserThemeOptions';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { settings, children } = props;

  const coreThemeConfig = themeOptions(settings);

  let theme = createTheme(coreThemeConfig);

  const mergeComponentOverrides = (theme: Theme, settings: Settings) =>
    UserThemeOptions()?.components;

  const mergeTypography = (theme: Theme) =>
    deepmerge(typography(theme), UserThemeOptions()?.typography);

  theme = createTheme(theme, {
    components: { ...mergeComponentOverrides(theme, settings) },
    typography: { ...mergeTypography(theme) },
  });

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={settings.theme}>
        <CssBaseline />
        <GlobalStyles styles={() => GlobalStyling(theme) as any} />
        {children}
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default ThemeComponent;
