import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import AuthForm from 'pages/Auth/AuthForm/AuthForm';
import { validationSchema } from 'shared/validationSchema/validationSchema';
import { Description, StyledAuthWrapper, Title } from '../commonAuthStyles';


const fieldsData = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const LoginPage = () => {
  const dispatch = useDispatch();
  const { reset } = useForm();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  const navigationData = {
    text: 'Don’t have an account?',
    buttonText: 'Sign Up!',
  };

  return (
    <StyledAuthWrapper>
        <Title>Sign In</Title>
        <Description>Welcome back to effortless expense tracking! Your financial dashboard awaits.</Description>

        <AuthForm
          fieldsData={fieldsData}
          submitButtonText="Sign In"
          initialState={{ email: '', password: '' }}
          validationSchema={validationSchemaLogin}
          onSubmit={onSubmit}
          navigationData={navigationData}
          authType="login"
        />
    </StyledAuthWrapper>
  );
};

export default LoginPage;
