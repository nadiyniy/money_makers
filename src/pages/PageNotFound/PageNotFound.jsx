import React from 'react';
import { StyledBox, StyledTitle, StyledButton } from './PageNotFound.styled';

const PageNotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <StyledBox>
      <StyledTitle>
        404 Page Not Found
      </StyledTitle>
      <StyledButton onClick={handleGoBack}>
        Go Back
      </StyledButton> 
    </StyledBox>
  );
};

export default PageNotFound;
