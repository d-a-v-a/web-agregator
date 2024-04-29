import styled, {css} from "styled-components";
import React, {useRef, useState} from 'react';
import profileIMG from '../../assets/images/profile_default/profile.svg'
import {Link} from "react-router-dom";
import dropdownOutline from "../../assets/images/icons/arrows/dropdown_outline.svg";
import FireIcon from "../../assets/images/icons/voices.svg";
import {useData} from "../../context/DataContext";
import useOnClickOutside from "../../hooks/onClickOutside";

/**
 * component profile in Header
 * @constructor
 */
const Profile = () => {

    const {data} = useData();

    if (!data.countFireUser || typeof data.countFireUser !== 'number') {
        data.countFireUser = 0;
    }

    const isActiveUser: boolean = false;

    /**
     * property active drop element
     */
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
                <Fire isActiveUser={isActiveUser} src={FireIcon} alt=""/>
                <CountFire>{data.countFireUser}</CountFire>
            </FireWrapper>
        </ProfileStyle>
    )
}

const CountFire = styled.span`
    color: #FFF;

    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const FireWrapper = styled.div`
    display: flex;
    align-items: center;
`

type PropsFire = {
    isActiveUser: boolean;
}

const Fire = styled.img<PropsFire>`
    high: 2.2rem;
    width: 2.2rem;
    filter: ${({isActiveUser}) => isActiveUser ? 'none' : 'grayscale(100%)'}
`

const LinkProfile = styled(Link)`
    display: flex;
    align-items: center;

    margin-right: 0.2rem;

    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;

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
        width: 1.6rem;
        height: 1.6rem;
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

/**
 * element Drop links wrapper
 */
const DropLinksWrapper = styled.ul<IsActive>`
    ${
            ({isActive}) => isActive ? css`
                        opacity: 1;
                    ` :
                    css`
                        opacity: 0;
                        display: none;
                    `
    }
    position: absolute;
    min-width: 100%;
    top: 100%;
    right: 0;
    transition: opacity 0.15s ease-in-out;
`

const DropLinks = styled.div`
    padding: 2rem 2.5rem;
    margin-top: 2rem;

    background-color: var(--dark-grey-color);

    transition: opacity 0.3s ease-in-out;
`

const DropLink = styled(Link)`
    margin-bottom: 1.2rem;
    font-size: 1.4rem;

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

