import styled from 'styled-components';

export const StyledAuthWrapper = styled.div`
  max-width: 375px;
  padding: 40px 20px 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 63px 32px 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 575px;
    margin-right: 100px;
    margin-left: 54px;
    padding: 0;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (min-width: 1280px) {
    display: block;
    height: auto;
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;

  color: var(--white-color);

  font-size: 32px;
  letter-spacing: -0.02em;
  font-weight: normal;

  span {
    color: var(--primary-color);
    text-decoration-line: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 56px;
    letter-spacing: -1.12px;
  }
`;

const sharedDescriptionStyles = `
  margin-bottom: 30px;
  color: var(--gray-text-40);
  font-size: 14px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 533px;
  }
`;

export const Description = styled.p`
  ${sharedDescriptionStyles}

  @media screen and (min-width: 768px) {
    max-width: 533px;
  }
`;

export const FormDescription = styled.p`
  ${sharedDescriptionStyles}
  max-width: 399px;

  @media screen and (min-width: 1280px) {
    max-width: 533px;
  }
`;

export const Placeholder = styled.div`
  height: 30px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  height: 30px;
  margin-bottom: 10px;
  color: var(--error-color);
  font-size: 14px;
  margin-bottom: 10px;
`;
