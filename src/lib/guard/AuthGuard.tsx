import { ReactElement, ReactNode, useEffect } from 'react';
import { useAuth } from '../context/auth/auth-provider';
import { useRouter } from 'next/router';

interface IAuthGuardProps {
  children: ReactNode;
  roles?: string[];
  fallback: ReactElement | null;
}

const AuthGuard = ({ children, roles, fallback }: IAuthGuardProps) => {
  const auth = useAuth();
  const router = useRouter();
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (!auth.auth?.user && !auth.auth?.token) {
        console.log(router.asPath);
        if (router.asPath !== '/') {
          router.replace({
            pathname: '/login',
            query: { returnUrl: router.asPath },
          });
        } else {
          router.replace('/login');
        }
      }
      if (auth.auth?.user && roles && !roles.includes(auth.auth?.user?.role)) {
        router.replace('/home');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route, auth.auth],
  );

  if (!auth.auth?.token || !auth?.auth?.user || auth.loading) {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;
