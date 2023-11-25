import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import MainTransactionsPage from '../pages/Home/MainTransactionsPage';

const MainTransactionsProtectedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn, 1);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <MainTransactionsPage />;
};

export default MainTransactionsProtectedRoute;
