import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainTransactionsPage from 'pages/Home/MainTransactionsPage';
import Header from './header/Header';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route
          index
          element={
            <div>
              <Header />
            </div>
          }
        />
            <Route path="transactions/:transactionsType" element={<MainTransactionsPage />} />
      </Route>
    </Routes>
  );
};
