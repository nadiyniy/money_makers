import React from 'react';
import { StyledLoader } from './StyledLoaderSpinner';

const LoaderSpinner = () => {
  return (
    <StyledLoader>
      <div className={'lds-default'}>
        {[...Array(12)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </StyledLoader>
  );
};

export default LoaderSpinner;
