import React, { useState } from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';
import UserPanel from './userPanel/UserPanel';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { StyledContainer, StyledContainerUserBtn, StyledHeader } from './Header.styled';

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

export default Header;
