import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import AuthForm from 'pages/Auth/AuthForm/AuthForm';
import { loginThunk } from 'redux/auth/operations';
import { validationSchemaLogin } from 'shared/validationSchema/validationSchema';
import {
  AuthTitle,
  CenterWrapper,
  ErrorMessage,
  FormDescription,
  PageWrapper,
  Placeholder,
} from '../commonAuthStyles';
import { StyledCommonWrapper } from 'styles/Common.styled';
import BgImageWrapper from 'shared/BgImageWrapper/BgImageWrapper';

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

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const onSubmit = async data => {
    try {
      const result = await dispatch(loginThunk(data));

      if (result.error) {
        if (result.payload?.includes('403')) {
          setErrorMessage('Access denied: Invalid email or password');
        } else if (result.payload?.includes('400')) {
          setErrorMessage('Unknown error occurred. Please try again later.');
        }
        else if (result.payload.includes('50')) {
          setErrorMessage('We are very sorry. An error occurred on server side. Please try again later.');
        }
      }
    } catch (error) {
      console.error('error');
    }

    reset();
  };

  return (
    <StyledCommonWrapper>
      <CenterWrapper>
        <PageWrapper>
          <div>
            <AuthTitle>Sign In</AuthTitle>
            <FormDescription>
              Welcome back to effortless expense tracking! Your financial dashboard awaits.
            </FormDescription>

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
          </div>
          {isDesktop && <BgImageWrapper />}
        </PageWrapper>
      </CenterWrapper>
    </StyledCommonWrapper>
  );
};

export default LoginPage;
