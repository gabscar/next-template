// ** React Imports
import { createContext, ReactNode, useEffect, useState } from 'react';

import { Direction } from '@mui/material';
import { Mode, Skin, ThemeColor } from '@core/layouts/types';
import themeConfig from '@src/lib/config/themeConfig';
import { DefaultTheme } from 'styled-components';
import { light } from '../theme/config-theme/light';

export type Settings = {
  skin: Skin;
  mode: Mode;
  themeColor: ThemeColor;
  theme: DefaultTheme;
};

export type PageSpecificSettings = {
  skin?: Skin;
  mode?: Mode;

  direction?: Direction;
  themeColor?: ThemeColor;
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
  theme: light,
};

const restoreSettings = (): Settings | null => {
  let settings = null;

  const storedData: string | null = window.localStorage.getItem('settings');

  if (storedData) {
    settings = { ...JSON.parse(storedData) };
  } else {
    settings = initialSettings;
  }

  return settings;
};

const storeSettings = (settings: Settings) => {
  const initSettings = Object.assign({}, settings);

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
      saveSettings({ ...settings, mode: 'light', theme: light });
    }
  }, [settings.mode]);

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
