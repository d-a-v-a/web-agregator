import React from "react";
import styles from "./NavigationForProjects.module.css"
import searchImg from "./search.svg"
import checkboxImg from "./галка.svg"
import styled from "styled-components";
import HistoryButton from "./HistoryButton.svg"

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
          <img src={searchImg} alt="" className={styles.searchImg}/>
        </div>
      </div>

  )
}

const CardHistoryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  margin-bottom: 10px;
  padding: 18px 23px;
  background-color: #2D2D2D;
  cursor: pointer;
`

function CarHistory({genreGame = '', nameGame = ""}: {genreGame: string, nameGame: string}) {
  return(
      <CardHistoryStyled>
        <div>
          <NameGame genreGame={genreGame} nameGame={nameGame}/>
        </div>
        <img src={HistoryButton} alt=""/>
      </CardHistoryStyled>
  )
}

const GenreGameStyle = styled.div`
  margin-bottom: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: rgba(255, 255, 255, 0.8);
`

const NameGameStyle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #FFFFFF;
`


function NameGame({genreGame = '', nameGame = ""}: {genreGame: string, nameGame: string}) {
  return(
      <div>
        <GenreGameStyle>
          {genreGame}
        </GenreGameStyle>
        <NameGameStyle>
          {nameGame}
        </NameGameStyle>
      </div>
  )
}



function History() {
  return (
      <div>
        <h2 className={styles.searchBlock__h2}>История</h2>
        <CarHistory genreGame={"Аркады"} nameGame={"Birdie Fall"}/>
        <CarHistory genreGame={"Аркады"} nameGame={"Merge Комбинаторика"}/>
        <CarHistory genreGame={"Аркады"} nameGame={"Night Way"}/>

      </div>
  )
}

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 9px;
  
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
      content: "";
      background-image: url(${checkboxImg});
      background-size: cover;
      
      background-color: #D9D9D9;
      border-color:transparent ;
   
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