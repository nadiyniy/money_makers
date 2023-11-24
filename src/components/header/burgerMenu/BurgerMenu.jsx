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
      <button onClick={closeBurgerMenu}>X</button>
      <UserBarBtn toggleUserPanel={toggleUserPanel} />
      {isUserPanelOpen && <UserPanel />} <TransactionsHistoryNav />
    </StyledBurgerMenu>
  );
};
const StyledBurgerMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
`;

export default BurgerMenu;
