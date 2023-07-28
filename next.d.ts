import type {
  NextComponentType,
  NextPageContext,
} from 'next/dist/shared/lib/utils';
import type { ReactElement, ReactNode } from 'react';
import { UserRoles } from 'src/lib/enums/userRoles';

declare module 'next' {
  export declare type NextPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    authGuard?: boolean;
    guestGuard?: boolean;
    setConfig?: () => void;
    contentHeightFixed?: boolean;
    roles?: UserRoles[];
    getLayout?: (page: ReactElement) => ReactNode;
  };
}
