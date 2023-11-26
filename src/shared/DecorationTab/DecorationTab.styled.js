import styled from 'styled-components';

export const StyledDecorationTab = styled.div`
  position: absolute;
  left: -10px;
  bottom: 60px;

  display: flex;
  align-items: center;
  gap: 12px;

  width: 248px;
  height: 81px;
  padding: 20px;
  border-radius: 20px;

  background: var(--white-color);

  @media screen and (min-width: 768px) {
    left: -16px;
    bottom: 46px;

    gap: 22px;

    width: 303px;
    height: 121px;
    padding: 32px 23px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--primary-color);

  @media screen and (min-width: 768px) {
    width: 43px;
    height: 43px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 22px;
  }
`;

export const Text = styled.p`
  margin-bottom: 4px;
  color: rgba(17, 16, 28, 0.5);
  font-size: 12px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 7px;
  }
`;

export const Amount = styled.p`
  color: #11101c;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
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
