import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import BgImageWrapper from 'shared/BgImageWrapper/BgImageWrapper';

// import Header from './header';
// import BgImageWrapper from './BgImageWrapper';

// Імпорт компонентів
// Імпорти, назви папок/компонентів взяв по дефолту,вам слід адаптувати імпорти відповідно.
// import WellcomPage from './WellcomePage';
// import RegisterPage from './RegisterPage';
// import LoginPage from './LoginPage';
// import MainTransactionsPage from './MainTransactionsPage';
// import TransactionsHistoryPage from './TransactionsHistoryPage';
// import Loader from './Loader';

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log('isMobileOrTablet', isMobileOrTablet);

  const pageToRenderDesktop = ['/', '/register', '/login'];
  const pageToRenderMobileTablet = ['/'];
 
  const shouldRender =
    (isMobileOrTablet && pageToRenderMobileTablet.includes(pathname)) ||
    (!isMobileOrTablet && pageToRenderDesktop.includes(pathname));

  // console.log('shouldRender', shouldRender);

  return (
    <>
      <Header />
      {shouldRender && <BgImageWrapper />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export { Layout };
