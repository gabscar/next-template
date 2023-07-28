// ** React Imports
import { ReactElement, ReactNode, useEffect } from 'react';

// ** Next Import
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth/auth-provider';
import { Layout } from '@src/@core/layout/layout';

// ** Hooks Import

interface GuestGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props;
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (window.localStorage.getItem('userData')) {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  if (auth.loading && router.route !== '/login') {
    return fallback;
  }

  return <Layout>{children}</Layout>;
};

export default GuestGuard;
