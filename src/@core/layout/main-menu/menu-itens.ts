import { smallRightArrow } from '@src/@core/assets';
import { UserRoles } from '@src/lib/enums/userRoles';

export interface IDashboardLink {
  label: string;
  url: string;
  icon: any;
  permission: string[];
}
export const dashboardLinks: IDashboardLink[] = [
  {
    label: 'Login',
    url: '/login',
    icon: smallRightArrow,
    permission: [UserRoles.Admin, UserRoles.User],
  },
];
