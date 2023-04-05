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
            <div>
              <input type="checkbox" className={styles.input}/> Математика
            </div>

            <div>
              <input type="checkbox" className={styles.input}/> Медицина
            </div>

            <div>
              <input type="checkbox" className={styles.input}/> Другие области
            </div>

          </div>

          <div className={styles.SimulatorSection}>
            <h3 className={styles.SimulatorSection__h3}>Симуляторы</h3>
            <div>
              <input type="checkbox" className={styles.input}/> Физика
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Сопромат
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Биомеханика
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Другие области
            </div>

          </div>

          <div className={styles.entertaining}>
            <h3 className={styles.entertaining__h3 }>Развлекательные</h3>
            <div>
              <input type="checkbox" className={styles.input}/> Аркады
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Боевики
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Головоломки
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Казуальные
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Карточные
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Мидкорные
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Ролевые
            </div>
            <div>
              <input type="checkbox" className={styles.input}/> Другие области
            </div>

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