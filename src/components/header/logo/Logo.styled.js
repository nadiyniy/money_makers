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
      transform: rotate(50deg);
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
