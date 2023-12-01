import styled, {css} from "styled-components";
import React, { useRef, useState } from 'react';
import profileIMG from '../../assets/images/profile_default/profile.svg'
import {Link} from "react-router-dom";
import dropdownOutline from "../../assets/images/icons/arrows/dropdown_outline.svg";
import FireIcon from "../../assets/images/icons/voices.svg";
import { useData } from "../../context/DataContext";
import useOnClickOutside from "../../hooks/onClickOutside";


const Profile = () => {

  const {data} = useData();

  if (!data.countFireUser || typeof data.countFireUser !== 'number') {
      data.countFireUser = 0;
  }

  const [isActive, setIsActive] = useState<boolean>(false);

  const callToggle = () => {
    setIsActive(false);
}

  const onclickHandler = () => {
    setIsActive(true);
  }

  const node = useRef<any>();

  useOnClickOutside(node, callToggle);

  return (
      <ProfileStyle ref={node} onClick={onclickHandler}>
        <LinkProfile to={'#'}>
          <span style={{marginRight: 11, transition: 'color 0.15s ease-in-out'}}>Гость</span>
          <img src={profileIMG} alt="" style={{marginRight: 8}}/>
        </LinkProfile>
        <DropLinksWrapper isActive={isActive}>
          <DropLinks>
            <DropLink to={'/profile/information'}>Профиль</DropLink>
            <DropLink to={'/profile/my-projects'}>Мои проекты</DropLink>
            <DropLink to={'/auth/login'}>Войти</DropLink>
          </DropLinks>
        </DropLinksWrapper>
        <FireWrapper>
          <Fire isActive = {isActive} src={FireIcon} alt=""/>
          <CountFire>{data.countFireUser}</CountFire>
        </FireWrapper>
      </ProfileStyle>
  )
}

const CountFire = styled.span`
  color: #FFF;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const FireWrapper = styled.div`
  display: flex;
  align-items: center;
`

type PropsFire = {
  isActive: boolean;
}

const Fire = styled.img<PropsFire>`
  high: 22px;
  width: 22px;
  filter: ${({ isActive }) => isActive ? 'none' : 'grayscale(100%)'}
`

const LinkProfile = styled(Link)`
  display: flex;
  align-items: center;

  margin-right: 2px;

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
  display: flex;
  position: relative;
  
  // &:hover ul {
  //   opacity 1;
  // }
`
type IsActive = {
  isActive: boolean;
}


const DropLinksWrapper = styled.ul<IsActive>`
${  
  ({ isActive }) => isActive ? css`
    opacity: 1;
  ` :
   css`
    opacity: 0;
  `
}
  position: absolute;
  min-width: 100%;
  top: 100%;
  right: 0;
  transition: opacity 0.15s ease-in-out;
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

