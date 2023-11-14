import React from "react";
import styled from "styled-components";
import History from "../../components/Aside/components/History";
import {H1Style, H2Style, PathName} from "../ProjectEditing/ProjectEditing";
import PreviewProject from "../../components/PreviewProject";
import image1 from "../../assets/images/project_preview/image1.jpg";
import ProjectPlay from "../../components/Aside/components/ProjectPlay";
import Statistics from "../../components/Aside/components/Statistics";
import Team from "../../components/Aside/components/Team";
import SwiperAboutProject from "../../components/ui/SwiperAboutProject";
import {Link} from "react-router-dom";
import RatingProject from "../../components/RatingProject";

const Project = () => {
    const divs = Array(8).fill(10).map((_, i) => <PreviewProject key={i} path={'/project'} views={'12333'}
                                                                 rating={'4,5'}
                                                                 image={image1} category='Аркады'
                                                                 name='Merge Комбинаторика'/>)
    return (
        <ProjectStyle>
            <H1Style>Страница проекта</H1Style>
            <PathName>
            <span style={{color: '#B6B6B6'}}>
                <Link style={{display: 'inline', color: '#B6B6B6'}} to={'/'}>Проекты </Link>
            </span>
                <span> &gt; </span>
                <span> Название проекта</span>
            </PathName>

            <ProjectGrid>
                <AsideProjectStyle>
                    <ProjectPlay path={'/play'} name={'Merge Комбинаторика'} image={image1}/>
                    <Statistics/>
                    <RatingProject endVoting={false} currentPlace={2} currentVoices={40} fullVoices={70}/>
                    <Team countOnTab={3}/>
                    <History title={'Проекты команды'}/>
                </AsideProjectStyle>
                <RightStyle>
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
                </RightStyle>
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

const AsideProjectStyle = styled.div`
  @media (max-width: 1165px) and (min-width: 681px) {
    display: flex;
    flex-wrap: wrap;
    
    > div {
      width: 50%;
    }
  }
`

const AboutStyled = styled.div`

`

const RightStyle = styled.div`
  flex: 0 1 736px;
`

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
  border: 1px solid #99A2AD;

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
  max-width: 1184px;
  padding: 0 20px;
`

const ProjectGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 1165px) {
    flex-direction: column;
    row-gap: 30px;
  }
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
  
  @media (max-width: 1000px) {
    padding: 20px;
  }
`

const SimilarStyled = styled.div`

`

const SimilarGrid = styled.div`
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1145px) {
    grid-template-columns: repeat(3, minmax(200px, 265px));
    justify-content: space-between;
  }

  @media (max-width: 877px) {
    grid-template-columns: repeat(2, minmax(200px, 265px));
    justify-content: flex-start;
  }

  @media (max-width: 500px) {
    gap: 10px;
    grid-template-columns: repeat(1, minmax(200px, 265px));
  }
`

export default Project