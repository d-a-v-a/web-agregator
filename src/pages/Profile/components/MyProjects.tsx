import React, {useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import {H2Style} from "../../ProjectEditing/ProjectEditing";
import Selector from "../../../components/ui/Selector";
import {Context} from "../Context";
import CreateTeamBlock from "../../../components/CreateTeamBlock";
import {useData} from "../../../context/DataContext";
import TeamBlock from "../../../components/ui/TeamBlock";
import CheckedProjectTeamBlock from "../../../components/CheckedProjectTeamBlock";


interface ButtonSeasonProps {
    label: string,
    disabled?: boolean,
    select: boolean,
}

function ButtonSeason({label = '', disabled = false, select}: ButtonSeasonProps) {
    let color
    if (select) {
        color = '#5A9DF5'
    } else {
        color = '#282828'
    }
    return (
        <>
            {disabled ? (<ButtonSeasonStyle disabled={true}>{label}</ButtonSeasonStyle>)
                : (<ButtonSeasonStyle style=
                                          {{
                                              backgroundColor: color,
                                          }}>{label}</ButtonSeasonStyle>)}
        </>
    )
}

const MyProjects = () => {
    const [activeButton, setActiveButton] = useState(0)

    // @ts-ignore
    const {SetLabel} = useContext(Context)
    const {data} = useData()

    const seasons = [
        {
            label: 'Осень 2022',
            disabled: false
        },
        {
            label: 'Весна 2022',
            disabled: false
        },
        {
            label: 'Осень 2023',
            disabled: false
        },
        {
            label: 'Весна 2023',
            disabled: true
        }
    ]

    useEffect(() => {
        SetLabel('Мои проекты')
    }, []);

    return (
        <MyProjectStyle>
            <H2Style style={{
                marginBottom: 8,
            }}>Выбор проектов</H2Style>
            <P style={{
                fontSize: 18,
                color: '#B6B6B6'
            }}>Выберите учебный семестр</P>

            <ButtonSeasonWrapper>
                {seasons.map((season, idx) => (
                    <div key={idx}>
                        <div onClick={() => setActiveButton(idx)}>
                            <ButtonSeason disabled={season['disabled']} label={season['label']} select={idx === activeButton}/>
                        </div>
                    </div>
                ))}
            </ButtonSeasonWrapper>
            {data.checkProject ? <></> : <><Selector type={'role'}
                                                     width={'356px'}
                                                     margin={'10px'}
                                                     labelSelector={'Роль в команде*'}
                                                     options={[
                                                         'Team Lead', 'UI/UX-дизайнер', 'Game-дизайнер', 'Unity-разработчик', 'Художник',
                                                         'UE-разработчик',
                                                     ]}
            />
                <P>Создать команду может только <span style={{color: '#FBFF47'}}>Team Lead</span></P>
            </>}


            {data.checkProject ? <CheckedProjectTeamBlock/> : (data.role ? data.role === 'Team Lead' ?
                <CreateTeamBlock/> :
                <TeamBlock buttonExit={true}/> : <></>)}

        </MyProjectStyle>
    )
}

const ButtonSeasonWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 47px;
    flex-wrap: wrap;
`

const ButtonSeasonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 166px;
    height: 44px;
    border: 1px solid #5A9DF5;

    transition: background-color 0.1s ease-in-out;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    cursor: pointer;

    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;

    &:disabled {
        color: rgba(208, 230, 238, 0.5);
        border-color: rgba(208, 230, 238, 0.5);
        cursor: unset;
    }
`

const MyProjectStyle = styled.div`

`

const P = styled.div`
    margin-bottom: 47px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: rgba(208, 230, 238, 0.94);
`

export default MyProjects
