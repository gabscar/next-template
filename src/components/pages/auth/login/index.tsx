import LoginForm from '@src/components/forms/auth/login';
import { AuthTemplateWrapper } from '@src/lib/layout';

export const LoginPage = () => {
  return (
    <AuthTemplateWrapper title="Login">
      <LoginForm />
    </AuthTemplateWrapper>
  );
};
