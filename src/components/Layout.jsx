import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

// import Header from './header';
// import BgImageWrapper from './BgImageWrapper';

// Імпорт компонентів
// Імпорти, назви папок/компонентів взяв по дефолту,вам слід адаптувати імпорти відповідно.
// import Header from './Header';
// import BgImageWrapper from './BgImageWrapper';
// import WellcomPage from './WellcomePage';
// import RegisterPage from './RegisterPage';
// import LoginPage from './LoginPage';
// import MainTransactionsPage from './MainTransactionsPage';
// import TransactionsHistoryPage from './TransactionsHistoryPage';
// import Loader from './Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export { Layout };
