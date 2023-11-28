import styled from 'styled-components';

export const DonutWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 99px 22px 87px 22px;
  max-width: 335px;
  height: 533px;
  background-color: var(--gray-dark-color);
  border-radius: var(--border-radius-30);
  color: var(--white-color);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 302px;
    max-width: 704px;
    padding: 99px 372px 82px 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 630px;
    height: 302px;
    padding: 40px 66px 82px 40px;
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
color: var(--gray-text-50);
padding-bottom: 40px;
`;

export const ListWrapper = styled.div`
  max-width: 180px;
  margin-top: auto;
  margin-left: auto;
`;

export const ColoredMarker = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;