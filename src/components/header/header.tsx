import './header.css'
import React from 'react';
import profileIMG from './profile.png'
import logo from './logo.png'

function Header() {
  return (<div className="container">
    <img src={logo} alt="" className="container__logo" />
    <ul className="container__list">
      <li className="container__li">
        <a href="src/components/header/header" className="container__a">
          Площадка проектов
        </a>
      </li>
      <li className="container__li">
        <a href="src/components/header/header" className="container__a">
          Защиты проектов
        </a>
      </li>
      <li className="container__li">
        <a href="src/components/header/header" className="container__a">
          Заказать проект
        </a>
      </li>
      <li className="container__li">
        <a href="src/components/header/header" className="container__a">
          Обучение команды
        </a>
      </li>
    </ul>

    <div className="profile">
      <span className="profile__span">
        Профиль
      </span>
      <img src={profileIMG} alt=""/>
    </div>
  </div>)
}

export default Header
