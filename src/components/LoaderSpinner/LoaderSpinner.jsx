import React from 'react';
import { StyledLoader } from './StyledLoaderSpinner';

const LoaderSpinner = () => {
  return (
    <StyledLoader>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoader>
  );
};

export default LoaderSpinner;
