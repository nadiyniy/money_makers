import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Eye, EyeOff, Error, Check } from 'components/svgs';
import {
  ErrorMessage,
  FormWrapper,
  HintMessage,
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

  const { isDirty, errors, touchedFields } = formState;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const fieldHints = {
    name: 'Name is required',
    email: 'E-mail is required',
    password: 'Password must contain  6 - 20 symbols',
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
                className={` ${errors[field.name] ? 'error' : ''} ${
                  !errors[field.name] && touchedFields[field.name] && 'success'
                }`}
              />

              {field.type !== 'password' && (
                <IconContainer>
                  {errors[field.name] && <Error />}
                  {touchedFields[field.name] && !errors[field.name] && !isPasswordVisible && <Check />}
                </IconContainer>
              )}

              {field.type === 'password' && (
                <IconContainer onClick={togglePasswordVisibility}>
                  {errors[field.name] ? <Error /> : !isPasswordVisible ? <EyeOff /> : <Eye />}
                </IconContainer>
              )}
            </InputContainer>

            {!errors[field.name] ? (
              <HintMessage>{fieldHints[field.name]}</HintMessage>
            ) : (
              <ErrorMessage>{errors[field.name].message}</ErrorMessage>
            )}
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
