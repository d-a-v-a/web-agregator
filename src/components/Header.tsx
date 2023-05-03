import styled from "styled-components";
import React from 'react';
import profileIMG from '../assets/images/profile.png'
import logo from '../assets/images/logo.png'
import {Link} from "react-router-dom";

function Header() {
  return (
      <HeaderStyle>
        <LogoStyle src={logo} />
        <ListLinks>
          <LinkToCategories label={'Площадка проектов'} path={'/editing'} margin={34}/>
          <LinkToCategories label={'Защиты проектов'} path={'/'} margin={34}/>
          <LinkToCategories label={'Заказать проект'} path={'/'} margin={34}/>
          <LinkToCategories label={'Обучение команды'} path={'/'} margin={0}/>
        </ListLinks>
        <Profile/>
      </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 53px;
  padding: 11px 98px 11px 118px;
  background-color:  var(--dark-grey-color);
`

const LogoStyle = styled.img`
  margin-right: 106px;
`

const ListLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 106px;
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
`


function Profile() {
  return(
      <ProfileStyle>
        <Link to={'auth/login'} style={{display: 'flex'}}>
          <span style={{marginRight: 11}}>Профиль</span>
          <img src={profileIMG} alt="" style={{marginRight: 8}}/>
        </Link>
      </ProfileStyle>
  )
}


export default Header
