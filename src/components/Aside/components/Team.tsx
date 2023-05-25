import React, {useState} from "react";
import styled from "styled-components";
import {H2Style} from "../../../pages/ProjectEditing/ProjectEditing";
import {
  PaginationButtonLeft,
  PaginationButtonRight,
  PaginationStyle,
  PaginationText
} from "../../ui/Pagination";
import course_1 from "../../../assets/images/course_1.svg"
import course_2 from "../../../assets/images/course_2.svg"
import course_3 from "../../../assets/images/course_3.svg"
import course_4 from "../../../assets/images/course_4.svg"
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

const CourseAndRoleStyle = styled.div<{ course: number }>`
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
    background: url(${course_1});
  }

  ${({course}) => course == 1 && `
        color: var(--green-color);
        &::before {
            background: url(${course_1});
        }
    `}

  ${({course}) => course == 2 && `
        color: var(--blue-color);
            &::before {
            background: url(${course_2});
        }
    `}

  ${({course}) => course == 3 && `
        color: var(--orange-color);
            &::before {
            background: url(${course_3});
        }
    `}

  ${({course}) => course == 4 && `
        color: var(--purple-color);
            &::before {
            background: url(${course_4});
        }
    `}
`

const ContactsStyle = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: var(--contacts-color);
`

const Team = ({countOnTab = 3}: { countOnTab?: number }) => {
  const list = [
    {
      name: 'Рубцов Павел',
      role: 'UX/UI-дизайнер',
      course: 1
    },
    {
      name: 'Филатова Софья',
      role: 'UX/UI-дизайнер',
      course: 2
    },
    {
      name: 'Козий Ольга',
      role: 'Frontend-разработчик',
      course: 2
    },
    {
      name: 'Филатова Софья 2',
      role: 'UX/UI-дизайнер',
      course: 1
    },
    {
      name: 'Козий Ольга 2',
      role: 'Frontend-разработчик',
      course: 2
    },
    {
      name: 'Рубцов Павел 2',
      role: 'UX/UI-дизайнер',
      course: 4
    },
    {
      name: 'Козий Ольга 3',
      role: 'Frontend-разработчик',
      course: 3
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
                .map(({name, role, course}, index) => (
                    <Participant key={index}>
                      <NameStyle>{name}</NameStyle>
                      <CourseAndRoleStyle course={course}>{role}</CourseAndRoleStyle>
                      <ContactsStyle>Контакты</ContactsStyle>
                    </Participant>
                ))
          }
          <PaginationStyle>
            <PaginationButtonLeft disabled={current == countOnTab} onClick={prevTabHandler} type='button'>
              <img src={arrow} alt=""/>
            </PaginationButtonLeft>
            <PaginationText>{current} из {length}</PaginationText>
            <PaginationButtonRight disabled={current == length} onClick={nextTabHandler} type='button'>
              <img src={arrow} alt=""/>
            </PaginationButtonRight>
          </PaginationStyle>
        </TeamWrapper>
      </TeamStyle>
  )
}

export default Team


