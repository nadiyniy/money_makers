import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import TransactionsHistoryProtectedRoute from 'routes/TransactionsHistoryProtectedRoute';
import MainTransactionsProtectedRoute from 'routes/MainTransactionsProtectedRoute';
import { Layout } from './Layout';
import PublicWelcomeRoute from 'routes/PublicWelcomeRoute';
import PublicLoginRoute from 'routes/PublicLoginRoute';
import PublicRegisterRoute from 'routes/PublicRegisterRoute';
import { refreshThunk } from 'redux/auth/operations';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import PageLoader from './PageLoader/PageLoader';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {}, []);

  return isLoading ? (
    <PageLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="transactions/:transactionsType" element={<MainTransactionsProtectedRoute />} />
        <Route path="/transactions/history/:transactionsType" element={<TransactionsHistoryProtectedRoute />} />
        <Route index element={<PublicWelcomeRoute />} />
        <Route path="login" element={<PublicLoginRoute />} />
        <Route path="register" element={<PublicRegisterRoute />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
