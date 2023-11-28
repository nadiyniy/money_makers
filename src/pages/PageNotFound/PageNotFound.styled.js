

import styled from 'styled-components';
import backgroundImage from '../../images/4044-page.png';

export const StyledBox = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.h1`
  color: #8cffa0; // A neon green to match the image
  font-family: 'Your Futuristic Font', sans-serif;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #121212; // Dark to match the theme
  color: #8cffa0; // Neon green text
  border: 1px solid #8cffa0; // Neon green border
  border-radius: 2rem;
  cursor: pointer;
  font-family: 'Your Futuristic Font', sans-serif;
  text-transform: uppercase;
  box-shadow: 0 0 10px #8cffa0; // Neon glow effect
  transition: all 0.3s ease;
  margin-left: auto;
   margin-right: auto;

  &:hover {
    background-color: #242424; // A slightly lighter shade on hover
    box-shadow: 0 0 20px #8cffa0; // Increase glow effect on hover
  }
`;



