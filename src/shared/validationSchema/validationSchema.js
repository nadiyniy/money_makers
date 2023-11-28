import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required('Name is required'),

  email: yup.string().email('Please, enter a valid e-mail').required('E-mail is required'),

  password: yup
    .string()
    .min(6, 'Password must contain at least 6 symbols')
    .max(15, 'Password must contain no more than 15 symbols')
    .required('Password is required'),
});
export const validationSchemaLogin = yup.object({
  email: yup.string().email('Please, enter a valid e-mail').required('E-mail is required'),

  password: yup
    .string()
    .min(6, 'Password must contain at least 6 symbols')
    .max(15, 'Password must contain no more than 15 symbols')
    .required('Password is required'),
});

export const validationCategoryFormSchema = yup.object({
  categoryName: yup.string().min(3, 'Category must contain at least 3 symbols').required(),
});

export const validationTransactionFormSchema = yup.object({
  date: yup.string().required(),
  time: yup.string().required(),
  category: yup.string().required(),
  sum: yup.string().required(),
});
