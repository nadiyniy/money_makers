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
  padding: 0 20px;
`;

export const StyledTitle = styled.h1`
  color: #8cffa0;
  font-family: 'Your Futuristic Font', sans-serif;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media (max-width: 1440px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #121212;
  color: #8cffa0;
  border: 1px solid #8cffa0;
  border-radius: 2rem;
  cursor: pointer;
  font-family: 'Your Futuristic Font', sans-serif;
  text-transform: uppercase;
  box-shadow: 0 0 10px #8cffa0;
  transition: all 0.3s ease;
  font-size: 1rem;
  &:hover {
    background-color: #242424;
    box-shadow: 0 0 20px #8cffa0;
  }

  @media (max-width: 1440px) {
    padding: 0.4rem 0.9rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    padding: 0.2rem 0.7rem;
    font-size: 0.7rem;
  }
`;
