import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../context/navState';
import {LinkToCategories} from "./Header/Header";

const Menu = styled.nav`
  @media (min-width: 1100px) {
    display: none;
  }
  
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 293;
  display: block;
  width: 400px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 40px;
  padding-right: 0px;
  align-items: stretch;
  background-color: var(--main-bg-color);
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  list-style: none;
 button {
   padding-left: 40px;
   margin-bottom: 10px;
 }
  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    const clickHandler = () => {
        toggleMenuMode();
    };

    return <Menu open={isMenuOpen}>
        <>
            <LinkToCategories onClick={clickHandler} label={'Площадка проектов'} path={'/editing'} margin={34}/>
            <LinkToCategories onClick={clickHandler}  label={'Защиты проектов'} path={'/'} margin={34}/>
            <LinkToCategories onClick={clickHandler} label={'Заказать проект'} path={'/'} margin={34}/>
            <LinkToCategories onClick={clickHandler} label={'Обучение команды'} path={'/'} margin={0}/>
        </>
    </Menu>;
};

SideMenu.propTypes = {
    children: PropTypes.node,
};
