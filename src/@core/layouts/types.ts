// ** Type Imports
import { PaletteMode, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export type Skin = 'default' | 'bordered';

export type Mode = PaletteMode | 'semi-dark';

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type BlankLayoutProps = {
  children: ReactNode;
};

export type NavSectionTitle = {
  action?: string;
  subject?: string;
  sectionTitle: string;
};

export type FooterProps = {
  sx?: SxProps<Theme>;
  content?: (props?: any) => ReactNode;
};
