import LoginForm from '@src/components/forms/auth/login';

export const LoginPage = () => {
  return (
    <div
      style={{
        marginTop: '50px',
        backgroundColor: 'white',
        width: '700px',
        gap: '20px',
      }}
    >
      <LoginForm />
    </div>
  );
};
