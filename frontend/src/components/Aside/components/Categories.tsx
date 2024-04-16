import React from "react";
import styled from "styled-components";
import Checkbox from "../../ui/Checkbox";
import RatingPreviewProject from "../../RatingPreviewProject";

/**
 * компонент списка категорий слева на главной странице
 * @constructor
 */
const Categories = () => {
    const categories = [
        {
            id: 1,
            title: 'Образовательные',
            count: '41',
            checkboxArr: ['Математика', 'Медицина', 'Другие области']
        },
        {
            id: 2,
            title: 'Симуляторы',
            count: '23',
            checkboxArr: ['Физика', 'Сопромат', 'Биомеханика', 'Другие области']
        },
        {
            id: 3,
            title: 'Развлекательные',
            count: '35',
            checkboxArr: [
                'Аркады',
                'Боевики',
                'Головоломки',
                'Казуальные',
                'Карточные',
                'Мидкорные',
                'Ролевые',
                'Другие области'
            ]
        },
        {
            id: 4,
            title: 'Другие проекты',
            count: '41',
            checkboxArr: ['Приложения', 'Другие']
        },
    ]


    return (
        <CategoriesStyle>
            <h2>Категории</h2>
            <CategoriesBlockStyle>
                <Checkbox labelTxt={'Все категории'}/>

                {
                    categories.map((item) =>
                        <CategoryGrid key={item['id']}>
                            <H3Style>{item['title']} ({item['count']})</H3Style>

                            {
                                item['checkboxArr'].map((labeltxt, index) =>
                                    <Checkbox key={index} labelTxt={labeltxt}/>
                                )
                            }
                        </CategoryGrid>
                    )
                }

            </CategoriesBlockStyle>
        </CategoriesStyle>
    )
}

export default Categories

const CategoriesStyle = styled.div`

`
const CategoriesBlockStyle = styled.div`
    margin-bottom: 3.1rem;
    background-color: var(--dark-grey-color);
    padding: 2.7rem 2rem;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.2rem;

    color: #C1D9E2;
`

const H3Style = styled.h2`
    margin: 0 0 1.8rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.2rem;

    color: var(--grey-title);
`

const CategoryGrid = styled.div`
    &:first-of-type {
        margin-top: 2rem;
    }
    
    &:not(:last-of-type) {
        margin-bottom: 3.5rem;
    }
`

