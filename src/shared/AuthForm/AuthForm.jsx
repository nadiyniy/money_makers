import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorSpan } from './AuthForm.styled';

// const mockToastError = () => undefined;

const AuthForm = ({
  fieldsData,
  submitButtonText,
  initialState,
  validationSchema,
  onSubmit,
  navigationData,
  authType,
}) => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: initialState,
    resolver: yupResolver(validationSchema),
  });

  const linkTo = authType === 'register' ? '/login' : '/register';

  const { isDirty } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {fieldsData.map(field => (
        <div key={field.name}>
          <input
            {...register(field.name)}
            type={field.type}
            placeholder={field.label}
            autoComplete={field.type === 'email' ? 'email' : 'current-password'}
          />
          {
            formState.errors[field.name] &&
              (!toast.error(formState.errors[field.name].message) ? (
                <ErrorSpan>{formState.errors[field.name].message}</ErrorSpan>
              ) : null)

            // (!mockToastError() ? (
            //   <ErrorSpan>{formState.errors[field.name].message}</ErrorSpan>
            // ) : null)
          }
        </div>
      ))}

      <button type="submit" disabled={!isDirty}>
        {submitButtonText}
      </button>

      {navigationData && (
        <div>
          <div>
            {navigationData.text}
            <Link to={linkTo}>{navigationData.buttonText}</Link>
          </div>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
