import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import TransactionsHistoryProtectedRoute from 'routes/TransactionsHistoryProtectedRoute';
import MainTransactionsProtectedRoute from 'routes/MainTransactionsProtectedRoute';
import { Layout } from './Layout';
import PublicWelcomeRoute from 'routes/PublicWelcomeRoute';
import PublicLoginRoute from 'routes/PublicLoginRoute';
import PublicRegisterRoute from 'routes/PublicRegisterRoute';
import { refreshThunk } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="transactions/:transactionsType" element={<MainTransactionsProtectedRoute />} />
          <Route path="/transactions/history/:transactionsType" element={<TransactionsHistoryProtectedRoute />} />
          <Route index element={<PublicWelcomeRoute />} />
          <Route path="login" element={<PublicLoginRoute />} />
          <Route path="register" element={<PublicRegisterRoute />} />
        </Route>
      </Routes>
    </div>
  );
};
