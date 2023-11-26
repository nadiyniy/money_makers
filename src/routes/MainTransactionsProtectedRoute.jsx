import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import MainTransactionsPage from '../pages/Home/MainTransactionsPage';

const MainTransactionsProtectedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <MainTransactionsPage />;
};

export default MainTransactionsProtectedRoute;
