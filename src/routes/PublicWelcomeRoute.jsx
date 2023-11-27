import WelcomePage from 'pages/Auth/WelcomePage/WelcomePage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PublicWelcomeRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/transactions/incomes" />;
  }
  return <WelcomePage />;
};

export default PublicWelcomeRoute;
