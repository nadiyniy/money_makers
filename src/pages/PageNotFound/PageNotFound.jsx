import React from 'react';

// import { StyledLinkHome, StyledWrapper, StyledHomeLink } from './PageNotFound.styled';

// const PageNotFound = () => {
//   return (
//     <StyledWrapper>
//       <h1>Alarm! 404</h1>
//       <StyledLinkHome>
//         You can go to <StyledHomeLink to="/">Home</StyledHomeLink>
//       </StyledLinkHome>
//     </StyledWrapper>
//   );
// };

// export default PageNotFound;

import img from '../../images/404-page.png';
import { StyledNotFoundImg, StyledWrapper } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <StyledWrapper>
      <h1>Alarm! 404</h1>
      <StyledNotFoundImg src={img} alt="404" />
    </StyledWrapper>
  );
};

export default PageNotFound;
