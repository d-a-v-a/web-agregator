import styled from "styled-components";
import React, {useContext, useRef} from 'react';
import logo from '../../assets/images/logo/logo.svg'
import {Link, NavLink} from "react-router-dom";
import Profile from "./Profile";
import MenuButton from "../MenuButton";
import {SideMenu} from "../SideMenu";
import useOnClickOutside from "../../hooks/onClickOutside";
import {MenuContext} from "../../context/navState";

const Header = () => {
    const node = useRef<any>();
    const { isMenuOpen, switchMenu }: any = useContext(MenuContext);

    const callToggle = () => {
        if (isMenuOpen) {
            switchMenu();
        }
    }

    useOnClickOutside(node, callToggle);


  return (
      <HeaderWrapper ref={node}>
        <HeaderStyle>
           <MenuButton />
          <Link to='/'>
            <LogoStyle src={logo} />
          </Link>
            <ListWrapper>
          <ListLinks>
            <LinkToCategories label={'Витрина проектов'} path={'/'} margin={34}/>
            <LinkToCategories label={'Защиты проектов'} path={'/protection'} margin={34}/>
            <LinkToCategories label={'Заказать проект'} path={'/order'} margin={34}/>
          </ListLinks>
            </ListWrapper>
          <Profile/>
            <SideMenu/>
        </HeaderStyle>
      </HeaderWrapper>
  )
}


export function LinkToCategories({label = 'ссылка', path = '/order', margin = 34, onClick}:{label: string, path: string, margin: number, onClick?: any}) {
  return(
      <button onClick={onClick} style={{marginRight: margin}}>
        <LinkStyle to={path} >{label}</LinkStyle>
      </button>
  )
}

const HeaderWrapper = styled.div<{ref?: any}>`
  position: sticky;
  top: 0;
  z-index: 10000;
  margin-bottom: 5.3rem;
  background-color:  var(--dark-grey-color);
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 128rem;
  padding: 1.6rem 2.5rem;

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

const ListLinks = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  
  @media (max-width: 1100px) {
    padding: 4rem 2rem;
    row-gap: 2rem;
    flex-direction: column;
    background: var(--main-bg-color);
    max-width: 30rem;
    height: 100%;
  }

  @media (max-width: 400px) {
    max-width: 100%;
  }
`

const LinkStyle = styled(NavLink)`
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.9rem;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--white-color);
  &.active {
    color: var(--blue-bg);
  }
  cursor: pointer;
  
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: var(--blue-bg);
  }

  @media (max-width: 1100px) {
    font-size: 2rem ;
  }
`

export default Header

