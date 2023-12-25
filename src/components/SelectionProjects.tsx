import React, {useState} from "react";
import Pagination from "./ui/Pagination";
import styled from "styled-components";
import image1 from "../assets/images/project_preview/image1.jpg"
import Select from "./Select";
import RatingPreviewProject from "./RatingPreviewProject";


const H2Style = styled.h2`
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 26px;
    color: var(--white-color);
`

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  flex-wrap: wrap;
  

  @media (max-width: 676px) {
    span:first-child {
      flex: 1 1 100%;
    }
  }
`

const FoundStyle = styled.span`
    flex: 1 1;
    font-size: 20px;
    color: var(--light-grey-color);
`

const HeaderSelectProjects = styled.div`
    position: sticky;
    padding: 15px 0 15px;
    top: 63px;
    background-color: var(--main-bg-color);
    z-index: 1000;
`

const SelectionProjects = () => {
    const [sort, setSort] = useState('По убыванию рейтинга')
    const projects = [
        {
            place: 1,
            path: '/project',
            voices: '1500',
            image: image1,
            prevCategory: 'Развлекательные',
            category: 'Аркады',
            name: 'Merge Комбинаторика',
            desc: 'Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков'
        },
        {
            place: 2,
            path: '/project',
            voices: '1300',
            image: image1,
            prevCategory: 'Развлекательные',
            category: 'Аркады',
            name: 'Merge Комбинаторика',
            desc: 'Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков'
        },
        {
            place: 3,
            path: '/project',
            voices: '400',
            image: image1,
            prevCategory: 'Развлекательные',
            category: 'Аркады',
            name: 'Merge Комбинаторика',
            desc: 'Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков'
        },
        {
            place: 4,
            path: '/project',
            voices: '300',
            image: image1,
            prevCategory: 'Развлекательные',
            category: 'Аркады',
            name: 'Merge Комбинаторика',
            desc: 'Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков'
        },
        {
            place: 11,
            path: '/project',
            voices: '30',
            image: image1,
            prevCategory: 'Развлекательные',
            category: 'Аркады',
            name: 'Merge Комбинаторика',
            desc: 'Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков'
        },
        {
            place: 22,
            path: '/project',
            voices: '20',
            image: image1,
            prevCategory: 'Развлекательные',
            category: 'Аркады',
            name: 'Merge Комбинаторика',
            desc: 'Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков'
        },
        {
            place: 44,
            path: '/project',
            voices: '0',
            image: image1,
            prevCategory: 'Развлекательные',
            category: 'Аркады',
            name: 'Merge Комбинаторика',
            desc: 'Основной геймплей игры завязан на использовании merge-механики — совмещение/слияние блоков'
        },
    ]
    const divs = projects.map((_, i) =>
        <RatingPreviewProject key={i} voices={_['voices']} path={_['path']} place={_['place']} image={_['image']} prevCategory={_['prevCategory']} category={_['category']} name={_['name']}
                              desc={_['desc']}/>
    )
    return (
        <div style={{maxWidth: 810}}>
            <HeaderSelectProjects>
                <H2Style>Подборка проектов &gt;</H2Style>
                <Options>
                    <FoundStyle>Найдено 31 проект</FoundStyle>
                    <Pagination current={1} total={5}/>
                    <Select setState={setSort} value={sort} options={['По убыванию рейтинга', 'По возрастанию рейтинга', 'Весь список проектов']}/>
                </Options>
            </HeaderSelectProjects>
            <>
                {divs}
            </>
        </div>
    )
}

export default SelectionProjects