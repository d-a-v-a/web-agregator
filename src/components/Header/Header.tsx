import styled from "styled-components";
import React, {useContext, useRef} from 'react';
import logo from '../../assets/images/logo.svg'
import {Link} from "react-router-dom";
import Profile from "./Profile";
import MenuButton from "../MenuButton";
import {SideMenu} from "../SideMenu";
import useOnClickOutside from "../../hooks/onClickOutside";
import {MenuContext} from "../../context/navState";

const Header = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode }: any = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

  return (
      <HeaderWrapper ref={node}>
        <HeaderStyle>
           <MenuButton />
          <Link to='/'>
            <LogoStyle src={logo} />
          </Link>
            <ListWrapper>
          <ListLinks>
            <LinkToCategories label={'Площадка проектов'} path={'/editing'} margin={34}/>
            <LinkToCategories label={'Защиты проектов'} path={'/'} margin={34}/>
            <LinkToCategories label={'Заказать проект'} path={'/'} margin={34}/>
            <LinkToCategories label={'Обучение команды'} path={'/'} margin={0}/>
          </ListLinks>
            </ListWrapper>
          <Profile/>
            <SideMenu/>
        </HeaderStyle>
      </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div<{ref?: any}>`
  position: sticky;
  top: 0;
  z-index: 10000;
  margin-bottom: 53px;
  background-color:  var(--dark-grey-color);
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1280px;
  padding: 11px 25px;

  @media (max-width: 1100px) {
    justify-content: space-between;
  }
`

const LogoStyle = styled.img`
  transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
`

const ListWrapper = styled.ul`
  @media (max-width: 1100px) {
    display: none;
  }
`

const BtnClose = styled.div`

  //@media (min-width: 1100px) {
  //  display: none;
  //}
  //cursor: pointer;
  //position: absolute;
  //width: 30px;
  //height: 30px;
  //top: 20px;
  //right: 20px;
  //z-index: 10;
  //
  //span {
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  transform: rotate(-45deg);
  //  width: 100%;
  //  height: 3px;
  //  border-radius: 3px;
  //  background: #ffffff;
  //}
  //
  //span:first-child {
  //  transform: translate(0, 12px) rotate(45deg);
  //}
  //
  //span:last-child {
  //  transform: translate(0, 12px) rotate(-45deg);
  //}
`

const ListLinks = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  
  @media (max-width: 1100px) {
    padding: 40px 20px;
    row-gap: 20px;
    flex-direction: column;
    background: var(--main-bg-color);
    max-width: 300px;
    height: 100%;
  }

  @media (max-width: 400px) {
    max-width: 100%;
  }
`

const LinkStyle = styled(Link)`
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--white-color);
  cursor: pointer;
  
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: var(--blue-bg);
  }

  @media (max-width: 1100px) {
    font-size: 20px ;
  }
`

export function LinkToCategories({label = 'ссылка', path = '/', margin = 34, onClick}:{label: string, path: string, margin: number, onClick?: any}) {
  return(
      <button onClick={onClick} style={{marginRight: margin}}>
        <LinkStyle to={path}>{label}</LinkStyle>
      </button>
  )
}

export default Header

