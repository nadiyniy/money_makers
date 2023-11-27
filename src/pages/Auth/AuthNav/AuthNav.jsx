import { SignInLink, SignUpLink, StyledItem, Wrapper } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <StyledItem>
        <SignUpLink to="/register">Sign Up</SignUpLink>
      </StyledItem>
      <StyledItem>
        <SignInLink to="/login">Sign In</SignInLink>
      </StyledItem>
    </Wrapper>
  );
};

export default AuthNav;
