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
  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      setIsUserPanelOpen(false);
    }
  };

  return (
    <StyledHeader>
      <StyledCommonWrapper>
        <Logo />
        <TransactionsHistoryNav />
        <UserBarBtn toggleUserPanel={toggleUserPanel} />
        {isUserPanelOpen && <UserPanel onClick={handleModalClose} />}
        <BurgerMenuBtn />
      </StyledCommonWrapper>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  border-bottom: 1px solid var(--gray-text-10);
  /* display: flex;
  align-items: center;
  padding: 18px; */
`;

export default Header;
