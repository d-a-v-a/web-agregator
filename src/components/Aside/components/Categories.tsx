import React from "react";
import styled from "styled-components";
import Checkbox from "../../ui/Checkbox";

const CategoriesStyle = styled.div`

`
const CategoriesBlockStyle = styled.div`
  margin-bottom: 31px;
  background-color: var(--dark-grey-color);
  padding: 27px 20px ;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #C1D9E2;
`

const H3Style = styled.h2`
  margin: 22px 0 18px 0;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color:var(--grey-title);
`

function Categories() {
  return(
      <CategoriesStyle>
        <h2>Категории</h2>
        <CategoriesBlockStyle>
          <Checkbox id={'ch1'} labelTxt={'Все категории'}></Checkbox>

            <H3Style>Образовательные</H3Style>
            <Checkbox id={'ch2'} labelTxt={'Математика'}></Checkbox>
            <Checkbox id={'ch3'} labelTxt={'Медицина'}></Checkbox>
            <Checkbox id={'ch4'} labelTxt={'Другие области'}></Checkbox>


            <H3Style>Симуляторы</H3Style>
            <Checkbox id={'ch5'} labelTxt={'Физика'}></Checkbox>
            <Checkbox id={'ch6'} labelTxt={'Сопромат'}></Checkbox>
            <Checkbox id={'ch7'} labelTxt={'Биомеханика'}></Checkbox>
            <Checkbox id={'ch8'} labelTxt={'Другие области'}></Checkbox>


            <H3Style>Развлекательные</H3Style>
            <Checkbox id={'ch9'} labelTxt={'Аркады'}></Checkbox>
            <Checkbox id={'ch10'} labelTxt={'Боевики'}></Checkbox>
            <Checkbox id={'ch11'} labelTxt={'Головоломки'}></Checkbox>
            <Checkbox id={'ch12'} labelTxt={'Казуальные'}></Checkbox>
            <Checkbox id={'ch13'} labelTxt={'Карточные'}></Checkbox>
            <Checkbox id={'ch14'} labelTxt={'Мидкорные'}></Checkbox>
            <Checkbox id={'ch15'} labelTxt={'Ролевые'}></Checkbox>
            <Checkbox id={'ch16'} labelTxt={'Другие области'}></Checkbox>

            <H3Style>Другие проекты</H3Style>
            <Checkbox id={'ch18'} labelTxt={'Приложения'}></Checkbox>
            <Checkbox id={'ch20'} labelTxt={'Другие'}></Checkbox>

        </CategoriesBlockStyle>
      </CategoriesStyle>
  )
}

export default Categories



