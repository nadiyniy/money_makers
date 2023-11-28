import styled from 'styled-components';

export const StyledLogo = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
    &:hover .logo-icon-svg,
    &:focus .logo-icon-svg {
      transition: var(--transition);
      transform: rotate(360deg);
    }
    &:hover,
    &:focus {
      transition: var(--transition);
      transform: scale(1.1);
    }
    p {
      color: #fafafa;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
      text-transform: uppercase;
    }
  }
`;
