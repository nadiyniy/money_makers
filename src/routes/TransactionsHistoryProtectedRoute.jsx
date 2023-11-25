import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import TransactionsHistoryPage from '../pages/TransactionsHistory.jsx/TransactionsHistory';

const TransactionsHistoryProtectedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <TransactionsHistoryPage />;
};

export default TransactionsHistoryProtectedRoute;
