import React from 'react';
import styled from "styled-components";
import {AsideStyle} from "../../components/Aside/AsideStyle";
import {H2Style} from "../ProjectEditing/ProjectEditing";
import {PublicationNotice} from "../../components/SidebarForEditing";
import {NavLink, Outlet} from "react-router-dom";
import exitSvg from "../../assets/images/exit.svg"

const ProfileLayout = () => {
  return (
      <ProfileLayoutStyle>
        <TitleStyle>Данные пользователя</TitleStyle>
        <SubTitle>Профиль</SubTitle>
        <ProfileGrid>
          <AsideStyle>
            <H2Style style={{marginBottom: '8px'}}>Редактирование</H2Style>
            <PublicationNotice>Изменения сохранены</PublicationNotice>
            <ProfileNavStyle>
              <NavListStyle>
                <NavLinkStyle
                    to={'my-projects'}
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                  Мои проекты
                </NavLinkStyle>
                <NavLinkStyle
                    to={'information'}
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                  Данные пользователя
                </NavLinkStyle>
                <NavLinkStyle
                    to={'security'}
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                  Безопасность
                </NavLinkStyle>
              </NavListStyle>
              <ExitStyle>Выход</ExitStyle>
            </ProfileNavStyle>
          </AsideStyle>
          <Outlet />
        </ProfileGrid>
      </ProfileLayoutStyle>
  )
}

export default ProfileLayout

const ProfileLayoutStyle = styled.div`
  margin: 0 auto 74px;
  max-width: 1144px;
`

const TitleStyle = styled.div`
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 26px;
  color: var(--white-color);
`

const SubTitle = styled.div`
  margin-bottom: 67px;
  font-size: 20px;
  color: var(--grey-title);
`

const ProfileGrid = styled.div`
  display: flex;
  gap: 120px;
`

const ProfileNavStyle = styled.nav`
  margin-bottom: 25px;
  padding: 27px;
  background-color: var(--dark-grey-color);
`

const NavListStyle = styled.ul`
  
`

const NavLinkStyle = styled(NavLink)<{ isActive?: boolean }>`
  margin-bottom: 15px;
  font-size: 18px;
  color: var(--input-title);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    color: var(--white-color);
    transition: color 0.3s ease-in-out;
  }
  &.active {
    color: var(--white-color);
  }
`

const ExitStyle = styled.button`
  margin-top: 50px;
  
  font-weight: 400;
  font-size: 18px;

  display: flex;
  align-items: center;
  gap: 9px;

  color: var(--red-color);
  
  &::before {
    content: '';
    width: 22px;
    height: 22px;
    
    background-image: url(${exitSvg});
    
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover::before  {
    transform: translateX(3px);
  }
`