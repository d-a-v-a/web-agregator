import React from "react";
import styles from "./NavigationForProjects.module.css"
import searchImg from "./search.svg"
import checkboxImg from "./галка.svg"
import styled from "styled-components";

function NavigationForProjects() {
  return(
      <div className={styles.container}>
        <Search></Search>

        <h2 className={styles.searchBlock__h2}>Категории</h2>
        <div className={styles.categories}>
          <div className={styles.item}>
            <Checkbox id={'ch1'} labelTxt={'Все категории'}></Checkbox>
          </div>

          <div className={styles.learnSection}>
            <h3 className={styles.learnSection__h3}>Образовательные</h3>
            <Checkbox id={'ch2'} labelTxt={'Математика'}></Checkbox>

            <Checkbox id={'ch3'} labelTxt={'Медицина'}></Checkbox>

            <Checkbox id={'ch4'} labelTxt={'Другие области'}></Checkbox>

          </div>

          <div className={styles.SimulatorSection}>
            <h3 className={styles.simulatorSection__h3}>Симуляторы</h3>
            <Checkbox id={'ch5'} labelTxt={'Физика'}></Checkbox>
            <Checkbox id={'ch6'} labelTxt={'Сопромат'}></Checkbox>
            <Checkbox id={'ch7'} labelTxt={'Биомеханика'}></Checkbox>
            <Checkbox id={'ch8'} labelTxt={'Другие области'}></Checkbox>

          </div>

          <div className={styles.entertaining}>
            <h3 className={styles.entertaining__h3}>Развлекательные</h3>
            <Checkbox id={'ch9'} labelTxt={'Аркады'}></Checkbox>
            <Checkbox id={'ch10'} labelTxt={'Боевики'}></Checkbox>
            <Checkbox id={'ch11'} labelTxt={'Головоломки'}></Checkbox>
            <Checkbox id={'ch12'} labelTxt={'Казуальные'}></Checkbox>
            <Checkbox id={'ch13'} labelTxt={'Карточные'}></Checkbox>
            <Checkbox id={'ch14'} labelTxt={'Мидкорные'}></Checkbox>
            <Checkbox id={'ch15'} labelTxt={'Ролевые'}></Checkbox>
            <Checkbox id={'ch16'} labelTxt={'Другие области'}></Checkbox>

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

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  
  label {
    cursor: pointer;
    display: flex;
  }
  
  input {
    opacity: 0;
    position: absolute;
  }
  
  label::before{
    content: "";
    margin-right: 9px;
    border: 2px solid #99A2AD;
    width: 22px;
    height: 22px;
    border-radius: 7px;
    cursor: pointer;
  }
  
  input:checked {
    &+label::before{
      content: "\\002714";
      background-color: #D9D9D9;
      border-color:#2D2D2D ;
   
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
type Props = { labelTxt: string, id: string }

const Checkbox = ({ labelTxt = "", id = "ch" }: Props) => {
  return (
    <CheckBoxContainer>
      <input type={"checkbox"} id={id}/>
      <label htmlFor={id}>{labelTxt}</label>
    </CheckBoxContainer>
  );
};

export default NavigationForProjects