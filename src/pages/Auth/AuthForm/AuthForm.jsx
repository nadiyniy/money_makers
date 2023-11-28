import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ErrorMessage,
  FormWrapper,
  Input,
  InputGroup,
  NavigationWrapper,
  StyledLink,
  SubmitButton,
} from './AuthForm.styled';

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
    <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        {fieldsData.map(field => (
          <InputGroup key={field.name}>
            <Input
              {...register(field.name)}
              type={field.type}
              placeholder={field.label}
              autoComplete={field.type === 'email' ? 'email' : 'current-password'}
            />
            {formState.errors[field.name] &&
              (!toast.error(formState.errors[field.name].message) ? (
                <ErrorMessage>{formState.errors[field.name].message}</ErrorMessage>
              ) : null)}
          </InputGroup>
        ))}
      </div>
      <div>
        <SubmitButton type="submit" disabled={!isDirty}>
          {submitButtonText}
        </SubmitButton>

        {navigationData && (
          <NavigationWrapper>
            <span>{navigationData.text} </span>
            <StyledLink to={linkTo}>{navigationData.buttonText}</StyledLink>
          </NavigationWrapper>
        )}
      </div>
    </FormWrapper>
  );
};

export default AuthForm;
