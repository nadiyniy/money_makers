import React, { Suspense } from 'react';
import { Route, Outlet } from 'react-router-dom';
// import Header from './header';
// import BgImageWrapper from './BgImageWrapper';

const SharedLayout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <Route
        exact
        path="/"
        render={() => (
          <div>
            {/* <BgImageWrapper /> */}
            {children}
          </div>
        )}
      />
    </div>
  );
};

const Layout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export { SharedLayout, Layout };
