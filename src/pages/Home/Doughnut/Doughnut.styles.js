import styled from 'styled-components';

export const DonutWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px;

  background-color: var(--gray-dark-color);
  border-radius: var(--border-radius-30);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ListWrapper = styled.div`
  max-width: 180px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const ColoredMarker = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const DoughnutScrollbar = styled.ul`
  margin-right: 10px;
  max-height: 200px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
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
`;
