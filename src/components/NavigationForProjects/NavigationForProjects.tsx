import React from "react";
import styles from "./NavigationForProjects.module.css"
import searchImg from "./search.svg"

function NavigationForProjects() {
  return(
      <div className={styles.container}>
        <Search></Search>
        <h2 className={styles.searchBlock__h2}>Категории</h2>
        <div className={styles.categories}>
          <input type="checkbox" className={styles.input}/> Все категориии
          <div className={styles.learnSection}>
            <h3 className={styles.learnSection__h3}>Образовательные</h3>
            <input type="checkbox" className={styles.input}/> Математика
            <input type="checkbox" className={styles.input}/> Медицина
            <input type="checkbox" className={styles.input}/> Другие области
          </div>

          <div className={styles.SimulatorSection}>
            <h3 className={styles.SimulatorSection__h3}>Симуляторы</h3>
            <input type="checkbox" className={styles.input}/> Физика
            <input type="checkbox" className={styles.input}/> Сопромат
            <input type="checkbox" className={styles.input}/> Биомеханика
            <input type="checkbox" className={styles.input}/> Другие области
          </div>

          <div className={styles.entertaining}>
            <h3 className={styles.entertaining__h3}>Развлекательные</h3>
            <input type="checkbox" className={styles.input}/> Аркады
            <input type="checkbox" className={styles.input}/> Боевики
            <input type="checkbox" className={styles.input}/> Головоломки
            <input type="checkbox" className={styles.input}/> Казуальные
            <input type="checkbox" className={styles.input}/> Карточные
            <input type="checkbox" className={styles.input}/> Мидкорные
            <input type="checkbox" className={styles.input}/> Ролевые
            <input type="checkbox" className={styles.input}/> Другие области
          </div>
        </div>

        <History></History>
      </div>
  )
}

function Search() {
  return (
      <div>
        <h2 className={styles.searchBlock__h2}>Проекты</h2>
        <div className={styles.searchBlock}>
          <input type="text" placeholder="Поиск" className={styles.search__input}/>
          <img src={searchImg} alt=""/>
        </div>
      </div>

  )
}

function History() {
  return (
      <div>
        <h2 className={styles.searchBlock__h2}></h2>
        <ul className={styles.historyBlock}>
          <li className={styles.history__li}>
            <div>
            <span>

            </span>
              <span></span>
              <img src="" alt=""/>
            </div>
          </li>
          <li className={styles.history__li}>
            <div>
            <span>

            </span>
              <span></span>
              <img src="" alt=""/>
            </div>
          </li>
          <li className={styles.history__li}>
            <div>
            <span>

            </span>
              <span></span>
              <img src="" alt=""/>
            </div>
          </li>
        </ul>
      </div>

  )
}

export default NavigationForProjects