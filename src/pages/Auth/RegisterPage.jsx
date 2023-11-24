import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';
import AuthForm from 'shared/AuthForm/AuthForm';
import { validationSchema } from 'shared/validationSchema/validationSchema';

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
    console.log(data);
    dispatch(registerThunk(data));
  };

  return (
    <div>
      RegisterPage
      <AuthForm
        onSubmit={submit}
        fieldsData={fieldsData}
        submitButtonText="Sign Up"
        initialState={{ email: '', password: '', name: '' }}
        validationSchema={validationSchema}
        navigationData={navigationData}
        authType="register"
      />
    </div>
  );
};

export default RegisterPage;
