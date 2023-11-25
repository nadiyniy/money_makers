import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, 'Password must contain at least 6 symbols')
    .max(12, 'Password must contain no more than 12 symbols')
    .required(),
});

export const validationCategoryFormSchema = yup.object({
  categoryName: yup.string().min(3, 'Category must contain at least 3 symbols').required(),
});
// export const validationSchema = yup.object().shape({
//   email: yup
//   .string('Please, enter your e-mail')
//   .email('Please, enter a valid e-mail')
//   .required('E-mail is required'),
//   password: yup
//     .string('Please, enter your password')
//     .min(6, 'Password must contain at least 6 symbols')
//     .max(12, 'Password must contain no more than 12 symbols')
//     .required('Password is required'),
// });
