import React, { useState } from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';
import UserPanel from './userPanel/UserPanel';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { StyledContainer, StyledContainerUserBtn, StyledHeader } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Header = () => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };

  return (
    <StyledHeader>
      <StyledCommonWrapper>
        <StyledContainer className={isLoggedIn ? 'auth-user' : ''}>
          <Logo isLoggedIn={isLoggedIn} />
          {isLoggedIn && (
            <>
              <TransactionsHistoryNav />
              <StyledContainerUserBtn>
                <UserBarBtn toggleUserPanel={toggleUserPanel} />
                {isUserPanelOpen && <UserPanel />}
              </StyledContainerUserBtn>
              <BurgerMenuBtn />
            </>
          )}
        </StyledContainer>
      </StyledCommonWrapper>
    </StyledHeader>
  );
};

export default Header;
