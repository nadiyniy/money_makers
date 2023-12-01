import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding-top: 37px;
  padding-bottom: 40px;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 54px;
    align-items: start;
    height: auto;

    padding-top: 40px;
    padding-bottom: 100px;
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    max-width: 575px;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @media screen and (min-width: 1280px) {
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
    margin-bottom: 20px;
    font-size: 56px;
    letter-spacing: -1.12px;
  }
`;

export const AuthTitle = styled(Title)`
  @media screen and (min-width: 1280px) {
    margin-top: 18px;
  }
`;

const sharedDescriptionStyles = `
  margin-bottom: 30px;
  color: var(--gray-text-40);
  font-size: 14px;
  letter-spacing: -0.02em;
  
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom:40px;
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
    max-width: 500px;
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
