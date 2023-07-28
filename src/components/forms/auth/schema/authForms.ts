import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  document: yup.string().required('login obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});
