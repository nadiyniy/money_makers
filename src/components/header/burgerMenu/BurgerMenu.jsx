import TransactionsHistoryNav from 'components/header/navBar/TransactionsHistoryNav';
import UserBarBtn from 'components/header/userBar/UserBarBtn';
import React, { useEffect, useState } from 'react';
import UserPanel from '../userPanel/UserPanel';
import styled from 'styled-components';

const BurgerMenu = ({ closeBurgerMenu }) => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };
  useEffect(() => {
    const handleModalCloseKeyDown = e => {
      if (e.code === 'Escape') {
        closeBurgerMenu();
      }
    };

    document.addEventListener('keydown', handleModalCloseKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleModalCloseKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [closeBurgerMenu]);

  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeBurgerMenu();
    }
  };

  return (
    <StyledBurgerMenu onClick={handleModalClose}>
      <StyledCloseBurgerBtn onClick={closeBurgerMenu}>X</StyledCloseBurgerBtn>
      <StyledContainerUserBtn>
        <UserBarBtn variant="burger" toggleUserPanel={toggleUserPanel} />
        {isUserPanelOpen && <UserPanel />}
      </StyledContainerUserBtn>

      <TransactionsHistoryNav variant="burger" />
    </StyledBurgerMenu>
  );
};
const StyledCloseBurgerBtn = styled.button`
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 20px;
  width: 20px;
  height: 20px;
`;
const StyledContainerUserBtn = styled.div`
  position: relative;
`;
const StyledBurgerMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  padding: 18px 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default BurgerMenu;
