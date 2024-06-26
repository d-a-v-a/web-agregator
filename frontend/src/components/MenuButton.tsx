import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/navState';

/**
 * a component button to display the burger list, for small screens
 * @constructor
 */
const HamburgerButton = () => {
    const { isMenuOpen, switchMenu }: any = useContext(MenuContext);
    const clickHandler = () => {
        switchMenu();
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

const MenuButton = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
  
  width: 3rem;
  height: 2rem;
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
export default HamburgerButton;