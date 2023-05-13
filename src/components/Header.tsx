import styled from "styled-components";
import React from 'react';
import profileIMG from './images/profile.png'
import logo from './images/logo.svg'
import {Link} from "react-router-dom";

function Header() {
  return (
      <HeaderWrapper>
          <HeaderStyle>
            <Link to='/'>
                <LogoStyle src={logo} />
            </Link>
            <ListLinks>
              <LinkToCategories label={'Площадка проектов'} path={'/editing'} margin={34}/>
              <LinkToCategories label={'Защиты проектов'} path={'/'} margin={34}/>
              <LinkToCategories label={'Заказать проект'} path={'/'} margin={34}/>
              <LinkToCategories label={'Обучение команды'} path={'/'} margin={0}/>
            </ListLinks>
            <Profile/>
          </HeaderStyle>
      </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
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
  max-width: 1252px;
  padding: 11px 0;
`

const LogoStyle = styled.img`
`

const ListLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
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
`

function LinkToCategories({label = 'ссылка', path = '/', margin = 34}:{label: string, path: string, margin: number}) {
  return(
      <li style={{marginRight: margin}}>
        <LinkStyle to={path}>{label}</LinkStyle>
      </li>
  )
}


const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: var(--white-color);

  &:hover span {
    color: var(--blue-bg);
  }
`


function Profile() {
  return(
      <ProfileStyle>
        <Link to={'/auth/login'} style={{display: 'flex', alignItems: 'center'}}>
          <span style={{marginRight: 11, transition: 'color 0.3s ease-in-out'}}>Профиль</span>
          <img src={profileIMG} alt="" style={{marginRight: 8}}/>
        </Link>
      </ProfileStyle>
  )
}


export default Header
