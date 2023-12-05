import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import PageLoader from '../PageLoader/PageLoader';
import { Container, ContentContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
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
