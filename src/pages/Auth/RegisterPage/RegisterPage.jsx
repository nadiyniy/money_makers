import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/auth/operations';
import AuthForm from 'pages/Auth/AuthForm/AuthForm';
import { validationSchemaRegister } from 'shared/validationSchema/validationSchema';
import { CenterWrapper, FormDescription, StyledAuthWrapper, Title } from '../commonAuthStyles';

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
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(registerThunk(data)).then(response => {
      if (response?.payload) {
        const sendData = {
          email: data.email,
          password: data.password,
        };
        dispatch(loginThunk(sendData));
      } else {
        console.error('Error');
      }
    });
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
      </StyledAuthWrapper>
    </CenterWrapper>
  );
};

export default RegisterPage;
