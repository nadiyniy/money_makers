import LoaderSpinner from 'components/LoaderSpinner/LoaderSpinner';
import React from 'react';
import { StyledPageLoader } from './StyledPageLoader';

const PageLoader = () => {
  return (
    <StyledPageLoader>
      <LoaderSpinner />
    </StyledPageLoader>
  );
};

export default PageLoader;
