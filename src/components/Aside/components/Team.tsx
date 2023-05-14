import React, {useState} from "react";
import styled from "styled-components";
import {H2Style} from "../../../pages/ProjectEditing/ProjectEditing";
import {
    PaginationButtonLeft,
    PaginationButtonRight,
    PaginationStyle,
    PaginationText
} from "../../ui/Pagination";
import iconRole2 from "../../../assets/images/icon_role_2.svg"
import arrow from "../../../assets/images/arrow_left.svg";

const TeamStyle = styled.div`
  margin-bottom: 50px;
`

const TeamName = styled.div`
  margin-bottom: 3px;
  font-weight: 400;
  font-size: 18px;
  color: var(--grey-title);
`

const TeamLength = styled.div`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;

  color: var(--title-blue-grey);
`

const TeamWrapper = styled.div`
  padding-left: 12px;
`

const Participant = styled.div`
  margin-bottom: 25px;
`

const NameStyle = styled.div`
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 18px;
    
    color: var(--name-title);
`

const RoleStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 8px;
    font-weight: 400;
    font-size: 18px;
    color: var(--role-color);
  
  &::before {
    content: '';
    flex: 0 0 16px;
    height: 18px;
    background: url(${iconRole2});
  }
`

const ContactsStyle = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: var(--contacts-color);
`

const Team = ({ countOnTab = 3 }: { countOnTab?: number }) => {
    const list = [
        {
            name: 'Рубцов Павел',
            role: 'UX/UI-дизайнер'
        },
        {
            name: 'Филатова Софья',
            role: 'UX/UI-дизайнер'
        },
        {
            name: 'Козий Ольга',
            role: 'Frontend-разработчик'
        },
        {
            name: 'Филатова Софья 2',
            role: 'UX/UI-дизайнер'
        },
        {
            name: 'Козий Ольга 2',
            role: 'Frontend-разработчик'
        },
        {
            name: 'Рубцов Павел 2',
            role: 'UX/UI-дизайнер'
        },
        {
            name: 'Козий Ольга 3',
            role: 'Frontend-разработчик'
        },
    ]

    const length = list.length

    if (countOnTab >= length) {
        countOnTab = length
    }

    const [current, setCurrent] = useState(countOnTab)

    const nextTabHandler = () => {
        if (current + countOnTab >= length) {
            setCurrent(length)
        } else {
            setCurrent(prevState => prevState + countOnTab)
        }
    }

    const prevTabHandler = () => {
        if (countOnTab >= length) {
            setCurrent(length)
            return
        }

        if (current - countOnTab <= countOnTab) {
            setCurrent(countOnTab)
            return
        }

        let i = current - 1
        while (i % countOnTab != 0) {
            i -= 1
        }
        setCurrent(i)
    }

    return (
        <TeamStyle>
            <H2Style>Команда разработки</H2Style>
            <TeamName>Название команды</TeamName>
            <TeamLength>{length} участников</TeamLength>
            <TeamWrapper>
                {
                    list.filter((_, index) => {
                        let i = current - 1

                        while (i % countOnTab != 0) {
                            i -= 1
                        }

                        return index < current && index >= i
                    })
                        .map(({ name, role }, index) => (
                        <Participant key={index}>
                            <NameStyle>{ name }</NameStyle>
                            <RoleStyle>{ role }</RoleStyle>
                            <ContactsStyle>Контакты</ContactsStyle>
                        </Participant>
                    ))
                }
                <PaginationStyle>
                    <PaginationButtonLeft onClick={prevTabHandler} type='button'>
                        <img src={arrow} alt=""/>
                    </PaginationButtonLeft>
                    <PaginationText>{current} из {length}</PaginationText>
                    <PaginationButtonRight onClick={nextTabHandler} type='button'>
                        <img src={arrow} alt=""/>
                    </PaginationButtonRight>
                </PaginationStyle>
            </TeamWrapper>
        </TeamStyle>
    )
}

export default Team



