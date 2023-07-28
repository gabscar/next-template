import { UserRoles } from '@lib/enums/userRoles';
import { LoginPage } from '@core/pages';

const Home = () => {
  return <LoginPage />;
};
Home.roles = [UserRoles.Admin];
Home.guestGuard = true;
export default Home;
