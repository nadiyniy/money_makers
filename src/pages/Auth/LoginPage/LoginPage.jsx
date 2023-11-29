import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import AuthForm from 'pages/Auth/AuthForm/AuthForm';
import { validationSchemaLogin } from 'shared/validationSchema/validationSchema';
import {
  CenterWrapper,
  ErrorMessage,
  FormDescription,
  Placeholder,
  StyledAuthWrapper,
  Title,
} from '../commonAuthStyles';

const fieldsData = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const navigationData = {
  text: 'Don’t have an account?',
  buttonText: 'Sign Up!',
};

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const { reset } = useForm();

  const onSubmit = async data => {
    try {
      const result = await dispatch(loginThunk(data));

      if (result.error) {
        if (result.payload?.includes('403')) {
          setErrorMessage('Access Denied: Invalid email or password');

          console.log('Access Denied: Invalid email or password');
        } else if (result.payload?.includes('400')) {
          setErrorMessage('Something went wrong. Please try again');

          console.log('Something went wrong. Please try again');
        }
      }
    } catch (error) {
      console.error('Some custom error message');
    }

    reset();
  };

  return (
    <CenterWrapper>
      <StyledAuthWrapper>
        <Title>Sign In</Title>
        <FormDescription>Welcome back to effortless expense tracking! Your financial dashboard awaits.</FormDescription>

        <AuthForm
          fieldsData={fieldsData}
          submitButtonText="Sign In"
          initialState={{ email: '', password: '' }}
          validationSchema={validationSchemaLogin}
          onSubmit={onSubmit}
          navigationData={navigationData}
          authType="login"
        />

        {!errorMessage && <Placeholder />}

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </StyledAuthWrapper>
    </CenterWrapper>
  );
};

export default LoginPage;
