import React, { Suspense } from 'react';
import { Route, Outlet } from 'react-router-dom';

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

const SharedLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Route
        exact
        path="/"
        render={() => (
          <div>
            {/* <BgImageWrapper /> */}
            {/* <Route path="/welcome" element={<WellcomePage />} /> */}
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* <Route path="/login" element={<LoginPage />} /> */}
            {/* <Route path="/transactions" element={<MainTransactionsPage />} /> */}
            {/* <Route path="/transactions/history" element={<TransactionsHistoryPage />} /> */}
            {/* <Route path="/loader" element={<Loader />} /> */}
               <Suspense>
 <Outlet />
                     </Suspense>


          </div>
        )}
      />
    </div>
  );
};

const Layout = () => {
  return (
    <Suspense>
      <SharedLayout />
    </Suspense>
  );
};

export { SharedLayout, Layout };
