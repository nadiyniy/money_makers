import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainTransactionsPage from 'pages/Home/MainTransactionsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>qq</p>} />
        <Route path="transactions/:transactionsType" element={<MainTransactionsPage />} />
      </Route>
    </Routes>
  );
};
