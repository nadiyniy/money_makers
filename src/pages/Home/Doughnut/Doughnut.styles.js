import styled from 'styled-components';

export const DonutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px;
  max-height: 471px;
  width: 100%;

  background-color: var(--gray-dark-color);
  border-radius: var(--border-radius-30);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-height: 302px;
    max-width: 704px;
    padding: 40px;
    gap: 95px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    max-height: 300px;
    max-width: 630px;
    gap: 40px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
`;

export const ColoredMarker = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${({ color }) => color};
`;

export const DoughnutScrollbar = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 160px;
  max-height: 64px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scroll-color);
    border-radius: 6px;
  }
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 20px;
`;
export const PersengeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const PersengeSpan = styled.span`
  word-break: break-all;
`;

export const NotTansactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px;
  margin: 0 auto;
  gap: 80px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
  }
  @media screen and (min-width: 1280px) {
    padding: 34px 40px 34px 40px;
  }
`;
export const ImageChart = styled.img`
  max-width: 300px;
  max-height: 140px;
`;
export const NotTansactionTitle = styled.p`
  text-align: center;
  color: var(--white-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
