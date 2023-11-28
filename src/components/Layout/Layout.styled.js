const { default: styled } = require('styled-components');

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const BgImageWrapperContainer = styled.div`
  order: 2;
  @media (min-width: 1280px) {
    order: 1;
  }
`;

export const ContentContainer = styled.div`
  order: 1;
  @media (min-width: 1280px) {
    order: 2;
    flex-grow: 1;
  }
`;
