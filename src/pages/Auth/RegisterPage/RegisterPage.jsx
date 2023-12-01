import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthForm from 'pages/Auth/AuthForm/AuthForm';
import { loginThunk, registerThunk } from 'redux/auth/operations';
import { validationSchemaRegister } from 'shared/validationSchema/validationSchema';
import { AuthTitle, CenterWrapper, ErrorMessage, FormDescription, PageWrapper, Placeholder } from '../commonAuthStyles';
import { StyledCommonWrapper } from 'styles/Common.styled';
import BgImageWrapper from 'shared/BgImageWrapper/BgImageWrapper';

const fieldsData = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const navigationData = {
  text: 'Already have account?',
  buttonText: 'Sign In',
};

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

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

  const submit = async data => {
    try {
      const response = await dispatch(registerThunk(data));
      console.log('response', response?.payload);

      if (response?.payload) {
        if (response.payload.includes('409')) {
          setErrorMessage('Provided email already exists. Please sign in.');
        } else if (response.payload.includes('500')) {
          setErrorMessage('We are very sorry. An error occurred on server side. Please try again later.');
        } else {
          const sendData = {
            email: data.email,
            password: data.password,
          };
          const result = await dispatch(loginThunk(sendData));

          console.log(result);

          if (result.error) {
            setErrorMessage('You are registered. Please sign in.');
          }
        }
      }
    } catch (error) {
      // setErrorMessage('Unknown error occurred. Please try again later.');
    }
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

            {!errorMessage && <Placeholder />}

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </div>
          {isDesktop && <BgImageWrapper />}
        </PageWrapper>
      </CenterWrapper>
    </StyledCommonWrapper>
  );
};

export default RegisterPage;
