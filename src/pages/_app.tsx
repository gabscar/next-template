import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

import { ReactNode } from 'react';

import { ToastContainer } from 'react-toastify';
import AuthGuard from '@src/lib/guard/AuthGuard';
import GuestGuard from '@src/lib/guard/GuestGuard';
import { AuthProvider } from '@src/lib/context/auth/auth-provider';
import {
  SettingsConsumer,
  SettingsProvider,
} from '@src/@core/context/settingsContext';
import ThemeComponent from '@src/@core/theme/ThemeComponent';
import '../styles/globals.css';
import WindowWrapper from '@src/components/window-wrapper';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
};
type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
  roles?: string[];
};
const Guard = ({ children, authGuard, guestGuard, roles }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<div />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return (
      <AuthGuard fallback={<div />} roles={roles}>
        {children}
      </AuthGuard>
    );
  }
};
export default function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props;
  const route = useRouter();
  const currentPath = route.pathname ? route.pathname : '/';

  const authGuard = Component.authGuard ?? true;
  const setConfig = Component.setConfig ?? undefined;
  const guestGuard = Component.guestGuard ?? false;

  const allowedRoles = Component.roles;
  return (
    <AuthProvider>
      <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                <WindowWrapper>
                  <Link
                    href="https://fonts.googleapis.com/css?family=Inter"
                    rel="stylesheet"
                  ></Link>
                  <ToastContainer
                    theme="light"
                    style={{ fontSize: '12px' }}
                    autoClose={2000}
                  />
                  <Guard
                    authGuard={authGuard}
                    guestGuard={guestGuard}
                    roles={allowedRoles}
                  >
                    {<Component {...pageProps} />}
                  </Guard>
                </WindowWrapper>
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </AuthProvider>
  );
}
