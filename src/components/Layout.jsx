import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
