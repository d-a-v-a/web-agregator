import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";
import Selector from "./ui/Selector";
import NameProjectInput from "./ui/InputProfile";


function SidebarForEditing() {
    const [track, setTrack] = useState('GameDev');
    const [category, setCategory] = useState('Образовательные');
    const [subject, setSubject] = useState('Математика');

    const [subjectOptions, setSubjectOptions] = useState([
        'Математика', 'Медицина', 'Другие области'
    ]);

    useEffect(() => {
        if (category === 'Образовательные') {
            setSubjectOptions([
                'Математика', 'Медицина', 'Другие области'
            ])
            setSubject('Математика');
        } else if (category === 'Симуляторы') {
            setSubjectOptions([
                'Физика', 'Сопромат', 'Биомеханика', 'Другие области'
            ])
            setSubject('Физика');
        } else if (category === 'Развлекательные') {
            setSubjectOptions([
                'Аркады', 'Боевики', 'Головоломки', 'Казуальные', 'Карточные', 'Мидкорные', 'Ролевые', 'Другие области'
            ])
            setSubject('Аркады');
        } else if (category === 'Другие проекты') {
            setSubjectOptions([
                'Приложения', 'Другие'
            ])
            setSubject('Приложения');
        }
    }, [category]);

    const [team, setTeam] = useState('Пункт 1');

    return (
        <SidebarForEditingStyle>
            <H2Style style={{marginBottom: '8px'}}>Статус проекта</H2Style>
            <PublicationNotice>Проект опубликован</PublicationNotice>
            <ButtonSidebar>Загрузить файл</ButtonSidebar>
            <FileName>Загружено: название.zip 15 Мб</FileName>
            <Selector
                width={'260px'}
                value={track}
                setState={setTrack}
                labelSelector={'Трек проекта'}
                options={[
                    'GameDev'
                ]}
            />
            <Selector
                width={'260px'}
                value={category}
                setState={setCategory}
                labelSelector={'Категория проекта'}
                options={[
                    'Образовательные', 'Симуляторы', 'Развлекательные', 'Другие проекты'
                ]}
            />

            <Selector
                width={'260px'}
                value={subject}
                setState={setSubject}
                labelSelector={'Тема проекта'}
                options={subjectOptions}
            />

            <Selector
                width={'260px'}
                value={team}
                setState={setTeam}
                margin={'10px'}
                labelSelector={'Команда разработки'}
                options={[
                    'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5',
                    'Пункт 6', 'Пункт 7', 'Пункт 8', 'Пункт 9'
                ]}
            />
            <P>Профиль команды</P>
            <H2Style>Ссылка на репозиторий</H2Style>
            <div style={{width: '260px'}}>
                <NameProjectInput jackdaw={true} cleaner={true} placeholder={'Вставьте ссылку'}/>
            </div>
        </SidebarForEditingStyle>
    )
}

const P = styled.div`
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: rgba(208, 230, 238, 0.94);
`

const SidebarForEditingStyle = styled.div`
    flex: 0 1 299px;
`

const ButtonSidebar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 260px;
    height: 50px;

    background-color: #5A9DF5;
    border-radius: 3px;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: var(--white-color);
`

export const PublicationNotice = styled.div`
    margin-bottom: 35px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #47FFA7;

    &::before {

    }
`

const FileName = styled.div`
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: rgba(182, 182, 182, 0.94);`

export default SidebarForEditing