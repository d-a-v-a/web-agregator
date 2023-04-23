import styles from './Header.module.scss'
import styled from "styled-components";
import React from 'react';
import profileIMG from '../../assets/images/profile.png'
import logo from '../../assets/images/logo.png'

function Header() {
  return (
      <HeaderStyle>
        <LogoStyle src={logo} />
        <ListLinks>
          <Link label={'Площадка проектов'} path={'/'} margin={34}/>
          <Link label={'Защиты проектов'} path={'/'} margin={34}/>
          <Link label={'Заказать проект'} path={'/'} margin={34}/>
          <Link label={'Обучение команды'} path={'/'} margin={0}/>
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

const LinkStyle = styled.a`
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

function Link({label = 'ссылка', path = '/', margin = 34}:{label: string, path: string, margin: number}) {
  return(
      <li style={{marginRight: margin}}>
        <LinkStyle href={path}>{label}</LinkStyle>
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
        <span style={{marginRight: 11}}>Профиль</span>
        <img src={profileIMG} alt="" style={{marginRight: 8}}/>
      </ProfileStyle>
  )
}


export default Header
