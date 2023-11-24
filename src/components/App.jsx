import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import MainTransactionsPage from 'pages/Home/MainTransactionsPage';
import Header from './header/Header';
import RegisterPage from 'pages/Auth/RegisterPage';
import LoginPage from 'pages/Auth/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Header />} />
        <Route path="transactions/:transactionsType" element={<MainTransactionsPage />} />
        {/* <BgImageWrapper />
        <Route path="/welcome" element={<WellcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transactions" element={<MainTransactionsPage />} />
        <Route path="/transactions/history" element={<TransactionsHistoryPage />} />
        <Route path="/loader" element={<Loader />} /> */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
