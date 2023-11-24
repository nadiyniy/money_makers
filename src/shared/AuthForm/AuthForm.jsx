import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
  });

  const linkTo = authType === 'register' ? '/login' : '/register';

  const { isDirty } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fieldsData.map(field => (
        <div key={field.name}>
          <input
            {...register(field.name)}
            type={field.type}
            placeholder={field.label}
            autoComplete={field.type === 'email' ? 'email' : 'current-password'}
          />
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
