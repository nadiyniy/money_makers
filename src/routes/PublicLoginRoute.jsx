import LoginPage from 'pages/Auth/LoginPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PublicLoginRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/transactions/incomes" />;
  }
  return <LoginPage />;
};

export default PublicLoginRoute;
