import TransactionsHistoryNav from 'components/header/navBar/TransactionsHistoryNav';
import UserBarBtn from 'components/header/userBar/UserBarBtn';
import React, { useEffect, useState } from 'react';
import UserPanel from '../userPanel/UserPanel';
import { StyledContainerUserBtn } from '../Header.styled';
import { ModalBackdrop, StyledBurgerMenu, StyledCloseBurgerBtn } from './BurgerMenu.styled';
import { CloseBurgerIcon } from 'components/svgs';

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
    <ModalBackdrop onClick={handleModalClose}>
      <StyledBurgerMenu>
        <StyledCloseBurgerBtn onClick={closeBurgerMenu}>
          <CloseBurgerIcon width={27} height={27} />
        </StyledCloseBurgerBtn>
        <StyledContainerUserBtn>
          <UserBarBtn variant="burger" toggleUserPanel={toggleUserPanel} />
          {isUserPanelOpen && <UserPanel variant="burger" />}
        </StyledContainerUserBtn>
        <TransactionsHistoryNav variant="burger" />
      </StyledBurgerMenu>
    </ModalBackdrop>
  );
};

export default BurgerMenu;
