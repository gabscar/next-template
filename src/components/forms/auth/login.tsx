import { ILoginForm } from '@src/lib/interfaces/forms/auth';
import { useForm } from 'react-hook-form';
import { loginFormDefaultValues } from './defaultValues/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './schema/authForms';
import { authRequests } from '@src/lib/services/auth';
import { useRouter } from 'next/router';
import { Box, Button, FormHelperText, Grid } from '@mui/material';
import FormTextField from '@src/components/inputs/FormTextField';
import PasswordInput from '@src/components/inputs/PasswordInput';
import { useEffect, useRef } from 'react';

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: {
      document: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });
  const ref = useRef<HTMLDivElement>(null);
  const { setSession } = authRequests();
  const router = useRouter();
  const onSubmit = async (data: ILoginForm) => {
    const { document, password } = data;

    await setSession<ILoginForm>({
      requestParams: { document, password },
      successCallback: () => router.push('/home'),
    });
  };

  useEffect(() => {
    if (ref.current) {
      // ref.current.addEventListener('click', () => {
      //   console.log('click');
      // });
      ref.current.focus();
    }
  }, [ref.current]);
  return (
    <Box className="content-right" ref={ref}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} sm={8}>
          <FormTextField
            control={control}
            autoFocus
            name="document"
            fullWidth
            placeholder="Login"
            label="Login"
            useExternalLabel
            errorText={errors.document?.message}
          />
        </Grid>
        <PasswordInput
          control={control}
          name="password"
          fullWidth
          label="Senha"
          errorText={errors.password?.message}
        />

        {errors.password && (
          <FormHelperText sx={{ color: 'error.main' }} id="">
            {errors.password.message}
          </FormHelperText>
        )}

        <Button type="submit" size="large" variant="contained" sx={{ mb: 7 }}>
          Entrar
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
