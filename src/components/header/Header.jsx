import React, { useEffect, useState } from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';
import UserPanel from './userPanel/UserPanel';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { StyledContainer, StyledContainerUserBtn, StyledHeader } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };
  useEffect(() => {
    setIsUserPanelOpen(false);
  }, [location.pathname]);

  return (
    <StyledHeader>
      <StyledCommonWrapper>
        <StyledContainer className={isLoggedIn ? 'auth-user' : ''}>
          <Logo isLoggedIn={isLoggedIn} />
          {isLoggedIn && (
            <>
              <TransactionsHistoryNav />
              <StyledContainerUserBtn>
                <UserBarBtn toggleUserPanel={toggleUserPanel} isUserPanelOpen={isUserPanelOpen} />
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
