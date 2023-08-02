// ** React Imports
import { createContext, ReactNode, useEffect, useState } from 'react';

import { Direction } from '@mui/material';
import {
  AppBar,
  ContentWidth,
  Footer,
  Mode,
  Skin,
  ThemeColor,
  VerticalNavToggle,
} from '@core/layouts/types';
import themeConfig from '@src/lib/config/themeConfig';

export type Settings = {
  skin: Skin;
  mode: Mode;
  appBar?: AppBar;
  footer?: Footer;
  navHidden?: boolean;
  appBarBlur: boolean;
  direction: Direction;
  navCollapsed: boolean;
  themeColor: ThemeColor;
  contentWidth: ContentWidth;
};

export type PageSpecificSettings = {
  skin?: Skin;
  mode?: Mode;
  appBar?: AppBar;
  footer?: Footer;
  navHidden?: boolean; // navigation menu
  appBarBlur?: boolean;
  direction?: Direction;
  navCollapsed?: boolean;
  themeColor?: ThemeColor;
  contentWidth?: ContentWidth;
  layout?: 'vertical' | 'horizontal';
  lastLayout?: 'vertical' | 'horizontal';
  verticalNavToggleType?: VerticalNavToggle;
  toastPosition?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
};
export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

interface SettingsProviderProps {
  children: ReactNode;
  pageSettings?: PageSpecificSettings | void;
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  skin: themeConfig.skin,
  footer: themeConfig.footer,

  direction: themeConfig.direction,
  navHidden: themeConfig.navHidden,
  appBarBlur: themeConfig.appBarBlur,
  navCollapsed: themeConfig.navCollapsed,
  contentWidth: themeConfig.contentWidth,
};

const staticSettings = {
  appBar: initialSettings.appBar,
  footer: initialSettings.footer,
  navHidden: initialSettings.navHidden,
};

const restoreSettings = (): Settings | null => {
  let settings = null;

  const storedData: string | null = window.localStorage.getItem('settings');

  if (storedData) {
    settings = { ...JSON.parse(storedData), ...staticSettings };
  } else {
    settings = initialSettings;
  }

  return settings;
};

const storeSettings = (settings: Settings) => {
  const initSettings = Object.assign({}, settings);

  delete initSettings.appBar;
  delete initSettings.footer;
  delete initSettings.navHidden;

  window.localStorage.setItem('settings', JSON.stringify(initSettings));
};

export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({
  children,
  pageSettings,
}: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings({ ...restoredSettings });
    }
    if (pageSettings) {
      setSettings({ ...settings, ...pageSettings });
    }
  }, [pageSettings]);

  useEffect(() => {
    if (settings.mode === 'semi-dark') {
      saveSettings({ ...settings, mode: 'light' });
    }
    if (settings.appBar === 'hidden') {
      saveSettings({ ...settings, appBar: 'fixed' });
    }
  }, []);

  const saveSettings = (updatedSettings: Settings) => {
    storeSettings(updatedSettings);
    setSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
