import * as yup from 'yup';

export const validationSchemaRegister = yup.object({
  name: yup.string().required('Name is required'),

  email: yup
    .string()
    .email('Please, enter a valid e-mail')
    .required('E-mail is required')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format'),

  password: yup
    .string()
    .min(6, 'Password must contain at least 6 symbols')
    .max(20, 'Password must contain no more than 20 symbols')
    .required('Password is required'),
});

export const validationSchemaLogin = yup.object({
  email: yup
    .string()
    .email('Please, enter a valid e-mail')
    .required('E-mail is required')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format'),

  password: yup
    .string()
    .min(6, 'Password must contain at least 6 symbols')
    .max(20, 'Password must contain no more than 20 symbols')
    .required('Password is required'),
});

export const validationCategoryFormSchema = yup.object({
  categoryName: yup.string().min(3, 'Category must contain at least 3 symbols').required(),
});
