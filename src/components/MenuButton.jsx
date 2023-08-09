import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/navState';

const MenuButton = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
  
  width: 30px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  span {
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background: var(--white-color);
  }
`

const HamburgerButton = () => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <MenuButton
            className={isMenuOpen ? 'active' : ''}
            aria-label="Открыть главное меню"
            onClick={clickHandler}
        >
            <span/>
            <span/>
            <span/>
        </MenuButton>
    );
};

export default HamburgerButton;