import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 80px; /* Increased size for a more prominent display */
  color: #ffffff;
  text-transform: uppercase; /* Makes all letters uppercase */
  font-family: 'Press Start 2P', cursive; /* This font has a pixelated style */
  margin-bottom: 20px; /* Adjust as needed */
  
`;

export const StyledBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0C0D0D;
  /* Removed text shadow for a cleaner look */
`;

export const StyledLink = styled(Link) `
  text-decoration: underline;
  color: #0EF387; /* Bright green color for the link */
  font-family: 'Press Start 2P', cursive; /* Consistent font for the link */
  font-size: 24px; /* Adjust as needed */
  cursor: pointer; /* Changes the cursor to indicate clickable */
   display: block;
   margin-right: auto;
   margin-left: auto;
`;




