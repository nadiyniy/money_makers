import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import BgImageWrapper from 'shared/BgImageWrapper/BgImageWrapper';
import styled from 'styled-components';
import PageLoader from './PageLoader/PageLoader';

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

  const pageToRenderDesktop = ['/', '/register', '/login'];
  const pageToRenderMobileTablet = ['/'];

  const shouldRender =
    (isMobileOrTablet && pageToRenderMobileTablet.includes(pathname)) ||
    (!isMobileOrTablet && pageToRenderDesktop.includes(pathname));

  return (
    <>
      <Header />
      <Container>
        {shouldRender && (
          <BgImageWrapperContainer>
            <BgImageWrapper />
          </BgImageWrapperContainer>
        )}
        <ContentContainer>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ContentContainer>
      </Container>
    </>
  );
};

export { Layout };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const BgImageWrapperContainer = styled.div`
  order: 2;
  @media (min-width: 1280px) {
    order: 1;
  }
`;

const ContentContainer = styled.div`
  order: 1;
  @media (min-width: 1280px) {
    order: 2;
    flex-grow: 1;
  }
`;
