import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/auth/operations';
import AuthForm from 'shared/AuthForm/AuthForm';
import { validationSchema } from 'shared/validationSchema/validationSchema';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { Description, RegisterWrapper, Title, Wrapper } from './RegisterPage.styled';

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
    <StyledCommonWrapper>
      <Wrapper>
        <Title>Sign Up</Title>
        <Description>
          Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.
        </Description>
        <AuthForm
          onSubmit={submit}
          fieldsData={fieldsData}
          submitButtonText="Sign Up"
          initialState={{ email: '', password: '', name: '' }}
          validationSchema={validationSchema}
          navigationData={navigationData}
          authType="register"
        />
      </Wrapper>
    </StyledCommonWrapper>
  );
};

export default RegisterPage;
