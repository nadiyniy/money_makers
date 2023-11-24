import AuthForm from 'shared/AuthForm/AuthForm';
import { validationSchema } from 'shared/validationSchema/validationSchema';

const fieldsData = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const LoginPage = () => {
  const onSubmit = data => {
    console.log(data);
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
        isRegistrationForm={false}
      />
    </div>
  );
};

export default LoginPage;
