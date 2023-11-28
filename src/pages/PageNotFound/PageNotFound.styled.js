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
  padding: 0 20px; // Padding to ensure content doesn't touch the edges on smaller screens
`;

export const StyledTitle = styled.h1`
  color: #8cffa0; // A neon green to match the image
  font-family: 'Your Futuristic Font', sans-serif;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 2.5rem; // Default font size

  @media (max-width: 1440px) {
    font-size: 2rem; // Smaller font size for smaller screens
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; // Even smaller font size for tablet screens
  }

  @media (max-width: 375px) {
    font-size: 1.2rem; // Smaller font size for mobile screens
  }
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
  font-size: 1rem; // Default font size for buttons

  &:hover {
    background-color: #242424; // A slightly lighter shade on hover
    box-shadow: 0 0 20px #8cffa0; // Increase glow effect on hover
  }

  @media (max-width: 1440px) {
    padding: 0.4rem 0.9rem; // Slightly smaller padding
    font-size: 0.9rem; // Slightly smaller font size
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.8rem; // Even smaller padding for tablet screens
    font-size: 0.8rem; // Smaller font size for tablet screens
  }

  @media (max-width: 375px) {
    padding: 0.2rem 0.7rem; // Smaller padding for mobile screens
    font-size: 0.7rem; // Smaller font size for mobile screens
  }
`;
