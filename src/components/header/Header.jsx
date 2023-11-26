import React, { useState } from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';
import UserPanel from './userPanel/UserPanel';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { StyledContainer, StyledContainerUserBtn, StyledHeader } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Header = () => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };
  const auth = useSelector(selectCurrentUser);
  if (!isLoggedIn) {
    return (
      <StyledHeader>
        <StyledCommonWrapper>
          <StyledContainer isLoggedIn={isLoggedIn}>
            <Logo />
          </StyledContainer>
        </StyledCommonWrapper>
      </StyledHeader>
    );
  }
  return (
    <StyledHeader>
      <StyledCommonWrapper>
        <StyledContainer isLoggedIn={isLoggedIn}>
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
