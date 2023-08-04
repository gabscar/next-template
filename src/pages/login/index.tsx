import { UserRoles } from '@lib/enums/userRoles';
import { LoginPage } from '@components/pages';

const Home = () => {
  return <LoginPage />;
};
Home.roles = [UserRoles.Admin];
Home.guestGuard = true;
export default Home;
