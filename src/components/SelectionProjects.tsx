import React from "react";
import Pagination from "./ui/Pagination";
import styled from "styled-components";
import image1 from "../assets/images/project_preview/image1.jpg"
import Select from "./Select";
import RatingPreviewProject from "./RatingPreviewProject";
import { useData } from "../context/DataContext";


const H2Style = styled.h2`
    margin-bottom: 1.4rem;
    font-weight: 600;
    font-size: 2.6rem;
    color: var(--white-color);
`

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  

  @media (max-width: 676px) {
    span:first-child {
      flex: 1 1 100%;
    }
  }
`

const FoundStyle = styled.span`
    flex: 1 1;
    font-size: 2rem;
    color: var(--light-grey-color);
`

const HeaderSelectProjects = styled.div`
    position: sticky;
    padding: 1.5rem 0 1.5rem;
    top: 6.3rem;
    background-color: var(--main-bg-color);
    z-index: 1000;
`

const SelectionProjects = () => {
    const {data} = useData();
    const image1 = data?.allProjectsInformation?.[0]?.image ?? '';
    const image2 = data?.allProjectsInformation?.[1]?.image ?? '';
    const image3 = data?.allProjectsInformation?.[2]?.image ?? '';
    const image4 = data?.allProjectsInformation?.[3]?.image ?? '';

    const title1 = data?.allProjectsInformation?.[0]?.title ?? '';
    const title2 = data?.allProjectsInformation?.[1]?.title ?? '';
    const title3 = data?.allProjectsInformation?.[2]?.title ?? '';
    const title4 = data?.allProjectsInformation?.[3]?.title ?? '';

    const id1 = data?.allProjectsInformation?.[0]?.id ?? '';
    const id2 = data?.allProjectsInformation?.[1]?.id ?? '';
    const id3 = data?.allProjectsInformation?.[2]?.id ?? '';
    const id4 = data?.allProjectsInformation?.[3]?.id ?? '';


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
    const divs = data?.allProjectsInformation?.map((elem: any) =>
        <RatingPreviewProject key={elem.id}
                                id={elem.id}
                                voices={elem.rating}
                                path={'/project'} 
                                place={projects[elem.id-1].place} 
                                image={elem.image} 
                                prevCategory={'Развлекательные'} 
                                category={'Аркады'} 
                                name={elem.title}
                                desc={elem.description}/>
    )
    return (
        <div style={{maxWidth: 810}}>
            <HeaderSelectProjects>
                <H2Style>Подборка проектов &gt;</H2Style>
                <Options>
                    <FoundStyle>Найдено 31 проект</FoundStyle>
                    <Pagination current={1} total={5}/>
                    <Select value={'По убыванию рейтинга'} options={['По убыванию рейтинга', 'По возрастанию рейтинга']}/>
                </Options>
            </HeaderSelectProjects>
            <>
                {divs}
            </>
        </div>
    )
}

export default SelectionProjects