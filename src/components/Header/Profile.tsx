import styled from "styled-components";
import React from 'react';
import profileIMG from '../../assets/images/profile.png'
import {Link} from "react-router-dom";
import dropdownOutline from "../../assets/images/dropdown_outline.svg";

const Profile = () => {
  return (
      <ProfileStyle>
        <LinkProfile to={'#'}>
          <span style={{marginRight: 11, transition: 'color 0.3s ease-in-out'}}>Профиль</span>
          <img src={profileIMG} alt="" style={{marginRight: 8}}/>
          <img src="src/components/Header/Profile" alt=""/>
        </LinkProfile>
        <DropLinksWrapper>
          <DropLinks>
            <DropLink to={'/profile/information'}>Профиль</DropLink>
            <DropLink to={'/auth/login'}>Войти</DropLink>
          </DropLinks>
        </DropLinksWrapper>
      </ProfileStyle>
  )
}

const LinkProfile = styled(Link)`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: var(--white-color);

  &:hover span {
    color: var(--blue-bg);
  }

  @media (max-width: 500px) {
    span {
      display: none;
    }
  }

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    background: url(${dropdownOutline}) center/contain no-repeat;
  }
`

const ProfileStyle = styled.div`
  position: relative;
  
  &:hover ul {
    opacity: 1;
    visibility: visible;
  }
`

const DropLinksWrapper = styled.ul`
  visibility: hidden;
  position: absolute;
  opacity: 0;
  min-width: 100%;
  top: 100%;
  right: 0;
`

const DropLinks = styled.div`
  padding: 20px 25px;
  margin-top: 20px;
  
  background-color: var(--dark-grey-color);
  
  transition: opacity 0.3s ease-in-out;
`

const DropLink = styled(Link)`
  margin-bottom: 12px;
  font-size: 14px;

  color: var(--title-input);
  
  &:hover {
    color: var(--blue-bg);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  transition: color 0.3s ease-in-out;
`


export default Profile

