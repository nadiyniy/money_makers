import styled from 'styled-components';

export const StyledCommonWrapper = styled.div`
  position: relative;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1400px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
