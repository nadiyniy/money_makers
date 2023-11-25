import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from './Layout';
import MainTransactionsPage from 'pages/Home/MainTransactionsPage';
import WelcomePage from 'pages/Auth/WelcomePage';
import RegisterPage from 'pages/Auth/RegisterPage';
import LoginPage from 'pages/Auth/LoginPage';
import { refreshThunk } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <p>loading...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Header />} /> */}
          <Route path="transactions/:transactionsType" element={<MainTransactionsPage />} />
          {/* <BgImageWrapper /> */}
          <Route index element={<WelcomePage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/transactions" element={<MainTransactionsPage />} /> */}
          {/* <Route path="/transactions/history" element={<TransactionsHistoryPage />} /> */}
          {/* <Route path="/loader" element={<Loader />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
};
