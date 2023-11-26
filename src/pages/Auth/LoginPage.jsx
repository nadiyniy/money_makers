import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import AuthForm from 'shared/AuthForm/AuthForm';
import { validationSchema } from 'shared/validationSchema/validationSchema';

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
    <div>
      LoginPage
      <AuthForm
        fieldsData={fieldsData}
        submitButtonText="Sign In"
        initialState={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        navigationData={navigationData}
        authType="login"
      />
    </div>
  );
};

export default LoginPage;
