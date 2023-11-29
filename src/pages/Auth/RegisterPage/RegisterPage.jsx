import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/auth/operations';
import AuthForm from 'pages/Auth/AuthForm/AuthForm';
import { validationSchemaRegister } from 'shared/validationSchema/validationSchema';
import {
  CenterWrapper,
  ErrorMessage,
  FormDescription,
  Placeholder,
  StyledAuthWrapper,
  Title,
} from '../commonAuthStyles';

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

  const submit = async data => {
    try {
      const response = await dispatch(registerThunk(data));
      console.log('response', response);

      if (response?.payload) {
        const sendData = {
          email: data.email,
          password: data.password,
        };
        const result = await dispatch(loginThunk(sendData));
        console.log('result', result);

        if (response.error) {
          if (response.payload?.includes('409') && result.payload?.includes('403')) {
            setErrorMessage('Provided email already exists. Please sign in. ');
            console.log(errorMessage);
          }
          console.error('Error during registration');
        }
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <CenterWrapper>
      <StyledAuthWrapper>
        <Title>Sign Up</Title>
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
      </StyledAuthWrapper>
    </CenterWrapper>
  );
};

export default RegisterPage;
