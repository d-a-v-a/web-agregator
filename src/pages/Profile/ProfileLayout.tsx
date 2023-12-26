import React, {useEffect, useState} from 'react';
import {Context} from "./Context"
import styled from "styled-components";
import {AsideStyle} from "../../components/Aside/AsideStyle";
import {H2Style} from "../ProjectEditing/ProjectEditing";
import {PublicationNotice} from "../../components/SidebarForEditing";
import {NavLink, Outlet} from "react-router-dom";
import exitSvg from "../../assets/images/icons/exit.svg"
import {ButtonStyled} from "../../components/Aside/components/ProjectPlay";


type ColorsBackgroundButton = 'blue' | 'green'
type ColorsTextButton = 'white' | 'black'


const ProfileLayout = () => {
    const [label, setLabel] = useState('Профиль');
    const [buttonVisible, setButtonVisible] = useState(false);
    const [buttonLink, setButtonLink] = useState([])
    const [status, setStatus] = useState(['Изменений нет', '#47BDFF']);
    const [subSubmitText, setSubSubmitText] = useState('');


    const [buttonState, setButtonState] = useState({
        handleSubmit: (onSubmit: any) => {
        },
        onSubmit: () => true,
        isDirty: null,
        isValid: null,
        children: 'Сохранить',
        styles: {
            color: 'white',
            backgroundColor: 'green',
            borderColor: 'green',
        },
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
        setButtonVisible(bool)
    }

    return (
        <Context.Provider value={{
            setButtonLink, SetLabel, SetBtn, setStatus, setButtonState, setSubSubmitText
        }}>
            <ProfileLayoutStyle>
                <TitleStyle>{label}</TitleStyle>
                <SubTitleProfile>Профиль</SubTitleProfile>
                <ProfileGrid>
                    <AsideStyle>
                        <H2Style style={{marginBottom: '0.8rem'}}>Редактирование</H2Style>
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
                        {
                            buttonLink.length > 0 &&
                            <ButtonStyled to={buttonLink[1]}>
                                {buttonLink[0]}
                            </ButtonStyled>
                        }
                        {
                            buttonState &&
                            <SubmitProfile
                                type={'button'}
                                onClick={saveButtonHandler}
                                disabled={!buttonState.isValid}
                                color={buttonState.styles.color}
                                backgroundColor={buttonState.styles.backgroundColor}
                                borderColor={buttonState.styles.borderColor}
                            >
                                {buttonState.children}
                            </SubmitProfile>
                        }

                        {
                            subSubmitText &&
                            <SubSubmitProfile>
                                {subSubmitText}
                            </SubSubmitProfile>
                        }
                    </AsideStyle>
                    <Outlet/>
                </ProfileGrid>
            </ProfileLayoutStyle>
        </Context.Provider>
    )
}

export default ProfileLayout


type PropsSubmitProfile = {
    onClick?: any,
    color?: string,
    backgroundColor?: string,
    borderColor?: string,
}


const SubmitProfile = styled.button<PropsSubmitProfile>`
    width: 100%;
    height: 5.1rem;

    font-weight: 600;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({color = 'white'}) => color === 'white' ? 'var(--white-color)' : color === 'black' ? 'black' : 'white'};

    background-color: var(--blue-bg);
    background-color: ${({backgroundColor = 'blue'}) => backgroundColor === 'blue' ? 'var(--blue-bg)' : backgroundColor === 'green' ? '#16CD57' : 'blue'};
    border-color: ${({borderColor = 'blue'}) => borderColor === 'blue' ? 'var(--blue-bg)' : borderColor === 'green' ? '#16CD57' : 'black'};
    border-radius: 3px;

    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &:disabled {
        cursor: auto;
        background: var(--disabled-submit-bg);
        color: var(--disabled-submit-color);
    }
`

const SubSubmitProfile = styled.div`
    margin-top: 1.6rem;
    color: #B6B6B6;
    font-size: 14px;
    font-weight: 500;
`

const ProfileLayoutStyle = styled.div`
    margin: 0 auto 7.4rem;
    max-width: 118.4rem;
    padding: 0 2rem;
`

const TitleStyle = styled.div`
    margin-bottom: 1.4rem;
    font-weight: 600;
    font-size: 2.6rem;
    color: var(--white-color);
`

export const SubTitleProfile = styled.div`
    margin-bottom: 6.7rem;
    font-size: 2rem;
    color: var(--grey-title);
`

const ProfileGrid = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: space-between;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`

const ProfileNavStyle = styled.nav`
    margin-bottom: 2.5rem;
    padding: 2.7rem;
    background-color: var(--dark-grey-color);
`

const NavListStyle = styled.ul`

`

const NavLinkStyle = styled(NavLink)<{ isActive?: boolean }>`
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
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
    margin-top: 5rem;

    font-weight: 400;
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    gap: 0.9rem;

    color: var(--red-color);

    &::before {
        content: '';
        width: 2.2rem;
        height: 2.2rem;

        background-image: url(${exitSvg});

        transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
        transform: translateX(3px);
    }
`
