import React, { useState } from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';
import UserPanel from './userPanel/UserPanel';
import styled from 'styled-components';
import { StyledCommonWrapper } from 'styles/Common.styled';

const Header = () => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };

  return (
    <StyledHeader>
      <StyledCommonWrapper>
        <StyledContainer>
          <Logo />
          <TransactionsHistoryNav variant="default" />
          <StyledContainerUserBtn>
            <UserBarBtn variant="default" toggleUserPanel={toggleUserPanel} />
            {isUserPanelOpen && <UserPanel variant="default" />}
          </StyledContainerUserBtn>
          <BurgerMenuBtn />
        </StyledContainer>
      </StyledCommonWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--gray-text-10);
  padding: 18px 0;
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledContainerUserBtn = styled.div`
  position: relative;
`;

export default Header;
