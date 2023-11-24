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
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div>
      RegisterPage
      <AuthForm
        fieldsData={fieldsData}
        submitButtonText="Sign Up"
        initialState={{ email: '', password: '', name: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        navigationData={navigationData}
        isRegistrationForm={true}
      />
    </div>
  );
};

export default RegisterPage;
