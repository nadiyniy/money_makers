import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import TransactionsHistoryPage from '../pages/TransactionsHistory/TransactionsHistory';

const TransactionsHistoryProtectedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <TransactionsHistoryPage />;
};

export default TransactionsHistoryProtectedRoute;
