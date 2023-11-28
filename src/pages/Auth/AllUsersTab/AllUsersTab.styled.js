import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    display: none;
  }

  @media (min-width: 1280px) {
    margin-top: 156px;
    display: flex;
    gap: 32px;
  }
`;

export const OverlappingImages = styled.div`
  display: flex;
  width: 125px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 40px;
    border: 2px solid #11101c;

    position: relative;
    z-index: 3;
  }

  img + img {
    position: relative;
    left: -9px;
    z-index: 2;
  }

  img + img + img {
    position: relative;
    left: -18px;
    z-index: 1;
  }
`;

export const Amount = styled.p`
  margin-bottom: 12px;
  color: var(--white-color);

  font-size: 28px;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  max-width: 210px;
  color: var(--gray-text-40);

  font-size: 16px;
  letter-spacing: -0.02em;
`;
