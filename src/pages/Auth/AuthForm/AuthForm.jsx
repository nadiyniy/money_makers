import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Eye, EyeOff, Error } from 'components/svgs';
import {
  ErrorMessage,
  FormWrapper,
  IconContainer,
  Input,
  InputContainer,
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const linkTo = authType === 'register' ? '/login' : '/register';

  const { isDirty } = formState;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        {fieldsData.map(field => (
          <InputGroup key={field.name}>
            <InputContainer>
              <Input
                {...register(field.name)}
                type={isPasswordVisible ? 'text' : field.type}
                placeholder={field.label}
                autoComplete={field.type === 'email' ? 'email' : 'current-password'}
                className={formState.errors[field.name] ? 'error' : ''}
              />

              {field.type === 'password' && (
                <IconContainer onClick={togglePasswordVisibility}>
                  {formState.errors[field.name] ? <Error /> : !isPasswordVisible ? <EyeOff /> : <Eye />}
                </IconContainer>
              )}
            </InputContainer>

            {formState.errors[field.name] && <ErrorMessage>{formState.errors[field.name].message}</ErrorMessage>}
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
