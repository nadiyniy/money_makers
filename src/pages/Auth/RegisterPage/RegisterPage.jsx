import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from 'pages/Auth/AuthForm/AuthForm';
import BgImageWrapper from 'shared/BgImageWrapper/BgImageWrapper';
import AuthLoader from '../AuthLoader/AuthLoader';
import { loginThunk, registerThunk } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import { validationSchemaRegister } from 'shared/validationSchema/validationSchema';
import { AuthTitle, CenterWrapper, ErrorMessage, FormDescription, PageWrapper, Placeholder } from '../commonAuthStyles';
import { StyledCommonWrapper } from 'styles/Common.styled';

const fieldsData = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'passwordConfirm', label: 'Confirm password', type: 'password' },
];

const navigationData = {
  text: 'Already have account?',
  buttonText: 'Sign In',
};

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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

  const submit = data => {
    const sendRegisterData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(registerThunk(sendRegisterData))
      .then(response => {
        if (response.type === 'register/fulfilled') {
          const sendLoginData = {
            email: data.email,
            password: data.password,
          };
          dispatch(loginThunk(sendLoginData));
        } else {
          if (response?.payload?.includes('409')) {
            setErrorMessage('Provided email already exists. Please sign in.');
          }
        }
      })
      .catch(error => {
        return error;
      });
  };

  return (
    <StyledCommonWrapper>
      <CenterWrapper>
        <PageWrapper>
          <div>
            <AuthTitle>Sign Up</AuthTitle>
            <FormDescription>
              Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.
            </FormDescription>
            <AuthForm
              onSubmit={submit}
              fieldsData={fieldsData}
              submitButtonText="Sign Up"
              initialState={{ email: '', password: '', name: '' }}
              validationSchema={validationSchemaRegister}
              navigationData={navigationData}
              authType="register"
            />

            {!errorMessage && !isLoading && <Placeholder />}

            {errorMessage && !isLoading && <ErrorMessage>{errorMessage}</ErrorMessage>}

            {isLoading && <AuthLoader />}
          </div>
          {isDesktop && <BgImageWrapper />}
        </PageWrapper>
      </CenterWrapper>
    </StyledCommonWrapper>
  );
};

export default RegisterPage;
