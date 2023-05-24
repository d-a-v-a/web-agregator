import React from "react";
import styled from "styled-components";
import History from "../../components/Aside/components/History";
import {AsideStyle} from "../../components/Aside/AsideStyle";
import {H1Style, H2Style, PathName} from "../ProjectEditing/ProjectEditing";
import PreviewProject from "../../components/PreviewProject";
import image1 from "../../assets/images/image1.jpg";
import ProjectPlay from "../../components/Aside/components/ProjectPlay";
import Statistics from "../../components/Aside/components/Statistics";
import Team from "../../components/Aside/components/Team";
import SwiperAboutProject from "../../components/ui/SwiperAboutProject";


const Project = () => {
  const divs = Array(8).fill(10).map((_, i) => <PreviewProject key={i} path={'/project'} views={'12333'} rating={'4,5'}
                                                               image={image1} category='Аркады'
                                                               name='Merge Комбинаторика'/>)
  return (
      <ProjectStyle>
        <H1Style>Страница проекта</H1Style>
        <PathName><span style={{color: '#B6B6B6'}}>Профиль &gt; </span>Название проекта</PathName>

        <ProjectGrid>
          <AsideStyle>
            <ProjectPlay name={'Merge Комбинаторика'} image={image1}/>
            <Statistics/>
            <Team countOnTab={3}/>
            <History title={'Проекты команды'}/>
          </AsideStyle>
          <div>
            <AboutStyled>
              <HeadAboutStyled>
                <H2Style>Об игре</H2Style>
                <ButtonsAboutStyled>
                  <ButtonAboutStyled disabled={true}>HTML5</ButtonAboutStyled>
                  <ButtonAboutStyled>Git</ButtonAboutStyled>
                </ButtonsAboutStyled>
              </HeadAboutStyled>
              <SwiperAboutProject/>
            </AboutStyled>

            <TextWrapperStyled>
              <H2Style>Описание проекта</H2Style>
              <TextBlockStyled>
                <p>
                  Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние
                  блоков, для решения комбинаторной задачи, которая является главной целью игрока для
                  продвижения в игре на протяжении 14 уровней.
                </p>
                <p>
                  В игре есть 3 основных вида блоков:
                </p>
                <p>
                  — Числовой блок: содержит числовые значения и присвоенную переменную (n,m), на место
                  которой число встанет при слиянии с блоками формул;
                </p>
                <p>
                  — Арифметический блок: используется для создания числовых блоков, с помощью добавления
                  арифметических операций с числами: деление/умножение, сложение/вычитание;
                </p>
                <p>
                  — Блок формул: содержит основные формулы комбинаторики: P (перестановки),
                  C (сочетания), A (размещения). Данные блоки могут стать результатом слияния
                  арифметических блоков. Блоки формул также можно соединять с числовыми блоками, числа
                  которых встают на место значений (n,m), к которым они принадлежат.
                </p>
                <p>
                  После прохождения 14 уровней, вам откроется режим «Испытание», где вы можете проверить
                  свои знания и посоревноваться с другими игроками.После прох
                </p>
              </TextBlockStyled>
            </TextWrapperStyled>

            <TextWrapperStyled>
              <H2Style>Как играть</H2Style>
              <TextBlockStyled>
                <p>
                  Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние
                  блоков, для решения комбинаторной задачи, которая является главной целью игрока для
                  продвижения в игре на протяжении 14 уровней.
                </p>
                <p>
                  В игре есть 3 основных вида блоков:
                </p>
                <p>
                  — Числовой блок: содержит числовые значения и присвоенную переменную (n,m), на место
                  которой число встанет при слиянии с блоками формул;
                </p>
                <p>
                  — Арифметический блок: используется для создания числовых блоков, с помощью добавления
                  арифметических операций с числами: деление/умножение, сложение/вычитание;
                </p>
                <p>
                  — Блок формул: содержит основные формулы комбинаторики: P (перестановки),
                  C (сочетания), A (размещения). Данные блоки могут стать результатом слияния
                  арифметических блоков. Блоки формул также можно соединять с числовыми блоками, числа
                  которых встают на место значений (n,m), к которым они принадлежат.
                </p>
                <p>
                  После прохождения 14 уровней, вам откроется режим «Испытание», где вы можете проверить
                  свои знания и посоревноваться с другими игроками.После прох
                </p>
              </TextBlockStyled>
            </TextWrapperStyled>
          </div>
        </ProjectGrid>

        <SimilarStyled>
          <H2Style>Похожие проекты</H2Style>
          <SimilarGrid>
            {divs}
          </SimilarGrid>
        </SimilarStyled>
      </ProjectStyle>
  )
}

const ButtonsAboutStyled = styled.div`
  display: flex;
  gap: 9px;
`

const ButtonAboutStyled = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 71px;
  height: 26px;
  border-radius: 3px;
  border:1px solid #99A2AD;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;

  color: rgba(208, 230, 238, 0.94);
  
  &:hover {
    text-decoration-line: underline;
    text-underline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
  }
  
  &:disabled:hover {
    text-decoration: none;
    cursor: initial;
  }
`

const HeadAboutStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProjectStyle = styled.div`
  margin: 0 auto 74px;
  max-width: 1144px;
`

const ProjectGrid = styled.div`
  display: flex;
  gap: 119px;
  margin-bottom: 50px;
`

const AboutStyled = styled.div`

`

const TextWrapperStyled = styled.div`
  margin-top: 50px;
`

const TextBlockStyled = styled.div`
  padding: 30px 37px;
  background-color: var(--dark-grey-color);

  font-weight: 300;
  font-size: 16px;
  color: var(--paragraph-color);

  p {
    margin-bottom: 1em;

    font-weight: 300;
    font-size: 16px;
    color: var(--paragraph-color);
  }
`

const SimilarStyled = styled.div`

`

const SimilarGrid = styled.div`
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`


export default Project