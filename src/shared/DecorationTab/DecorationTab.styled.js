import styled from 'styled-components';

export const StyledDecorationTab = styled.div`
  position: absolute;
  left: -10px;
  bottom: 60px;

  display: flex;
  /* justify-content: space-between; */
  /* align-items: ; */
  gap: 12px;

  width: 248px;
  height: 81px;
  padding: 20px;
  border-radius: 20px;

  background: var(--white-color);
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--primary-color);
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  margin-bottom: 4px;
  color: rgba(17, 16, 28, 0.5);
  font-size: 12px;
`;

export const Amount = styled.p`
  color: #11101c;

  font-size: 18px;
  font-weight: 700;
`;

export const Percent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 22px;
  color: var(--primary-text-color);
  background: rgba(2, 177, 90, 0.15);
  border-radius: 13px;

  font-size: 12px;
`;
