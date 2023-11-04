import React, {useState} from 'react';
import {Context} from "./Context"
import styled from "styled-components";
import {AsideStyle} from "../../components/Aside/AsideStyle";
import {H2Style} from "../ProjectEditing/ProjectEditing";
import {PublicationNotice} from "../../components/SidebarForEditing";
import {NavLink, Outlet} from "react-router-dom";
import exitSvg from "../../assets/images/icons/exit.svg"
import {SubmitProfile} from "./components/Information";

const ProfileLayout = () => {
  const [label, setLabel] = useState('Профиль')
  const [createBtn, setCreateBtn] = useState(false)
  const [status, setStatus] = useState(['Изменений нет', '#47BDFF'])
  const [buttonState, setButtonState] = useState({
    handleSubmit: (onSubmit: any) => {},
    onSubmit: () => true,
    isDirty: null,
    isValid: null,
  })

  const saveButtonHandler = () => {
    if (buttonState?.handleSubmit) {
      buttonState.handleSubmit(buttonState.onSubmit())
    }
  }

  function SetLabel(label: string) {
    setLabel(label)
  }

  function SetBtn(bool: boolean) {
    setCreateBtn(bool)
  }

  return (
      <Context.Provider value={{
        SetLabel, SetBtn, setStatus, setButtonState
      }}>
        <ProfileLayoutStyle>
          <TitleStyle>{label}</TitleStyle>
          <SubTitleProfile>Профиль</SubTitleProfile>
          <ProfileGrid>
            <AsideStyle>
              <H2Style style={{marginBottom: '8px'}}>Редактирование</H2Style>
              <PublicationNotice style={{color: status[1]}}>{status[0]}</PublicationNotice>
              <ProfileNavStyle>
                <NavListStyle>
                  <NavLinkStyle
                      to={'my-projects'}
                      className={({isActive}) =>
                          isActive ? "active" : ""
                      }
                  >
                    Мои проекты
                  </NavLinkStyle>
                  <NavLinkStyle
                      to={'information'}
                      className={({isActive}) =>
                          isActive ? "active" : ""
                      }
                  >
                    Данные пользователя
                  </NavLinkStyle>
                  <NavLinkStyle
                      to={'security'}
                      className={({isActive}) =>
                          isActive ? "active" : ""
                      }
                  >
                    Безопасность
                  </NavLinkStyle>
                </NavListStyle>
                <ExitStyle>Выход</ExitStyle>
              </ProfileNavStyle>
              <SubmitProfile
                  type={'button'}
                  onClick={saveButtonHandler}
                  disabled={!buttonState.isDirty || !buttonState.isValid}>
                Сохранить
              </SubmitProfile>
              {/*<ButtonSaveProject display={createBtn}>Создать проект</ButtonSaveProject>*/}
            </AsideStyle>
            <Outlet/>
          </ProfileGrid>
        </ProfileLayoutStyle>
      </Context.Provider>
  )
}

export default ProfileLayout

const ProfileLayoutStyle = styled.div`
  margin: 0 auto 74px;
  max-width: 1184px;
  padding: 0 20px;
`

const TitleStyle = styled.div`
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 26px;
  color: var(--white-color);
`

export const SubTitleProfile = styled.div`
  margin-bottom: 67px;
  font-size: 20px;
  color: var(--grey-title);
`

const ProfileGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  
  @media (max-width: 1100px) {
    flex-direction: column;
  }
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

  &:hover::before {
    transform: translateX(3px);
  }
`
