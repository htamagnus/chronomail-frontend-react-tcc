import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const FormEmailSchema = yup.object({
  destinationName: yup.string().required('Preencha o nome completo'),
  destinationAddress: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha o e-mail'),
  dueDate: yup.string().required('Preencha uma data'),
  subject: yup.string().required('Preencha o assunto'),
  body: yup.string().required('Preencha o conteúdo'),
});

export const FormEmailResolver = yupResolver(FormEmailSchema);
