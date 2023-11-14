import React, {useState} from "react";
import styled from "styled-components";
import {H1Style} from "../pages/ProjectEditing/ProjectEditing";
import {Link} from "react-router-dom";
import TimerVoting from "./TimerVoting";
import voices from "../assets/images/icons/voices.svg"
import prize_place_1 from "../assets/images/icons/place_flag/place_1.svg"
import prize_place_2 from "../assets/images/icons/place_flag/place_2.svg"
import prize_place_3 from "../assets/images/icons/place_flag/place_3.svg"

const VotingMainStyle = styled.div`
  @media (min-width: 829px) {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
`

const VotingBox = styled.div`
  margin-bottom: 30px;

  &:first-child {
    flex: 1 1 546px;
  }

  &:last-child {
    flex: 1 1 300px;
  }
`

const ParStyle = styled.div`
  margin-bottom: 20px;

  color: #B6B6B6;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 146.5%;
  letter-spacing: -0.352px;

  b {
    color: #FFF;
  }

  span {
    color: #79D4F1;
  }
`

const LinkStyle = styled(Link)`
  display: inline-block;
  color: #79D4F1;
  font-weight: 500;
  text-decoration-line: underline;

  &:hover {
    text-decoration-line: none;
  }

  &:active {
    text-decoration-line: none;
  }
`

const EventTitle = styled.div`
  @media (min-width: 829px) {
    text-align: right;
  }
  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  line-height: 129.523%; /* 25.905px */

  span {
    font-weight: 400;
  }
`

const EventStatus = styled.div<{ status: any }>`
  @media (min-width: 829px) {
    text-align: right;
  }
  font-size: 16px;
  font-weight: 300;
  line-height: 151.523%;
  color: ${props => props.status ? '#47FFA7;' : '#FBFF47;'}
  margin-bottom: 10px;
`

const Availability = styled.div`
  @media (min-width: 829px) {
    text-align: right;
  }
  
  color: #D0E6EE;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`

const VoicesBox = styled.div<{ count: number }>`
  @media (min-width: 829px) {
    margin-left: auto;
  }
  
  position: relative;
  max-width: 62px;
  margin-bottom: 14px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    opacity: ${p => (p.count == 0 ? 0.55 : 1)};
    mix-blend-mode: ${p => (p.count == 0 ? 'luminosity' : 'normal')};
  }

  &::before {
    content: '${p => (p.count ? p.count : 0)}';
    position: absolute;
    left: 0;
    bottom: 0;
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
  }

  &::after {
    content: 'голосов';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    text-align: center;

    color: #C1D9E2;
    font-size: 13px;
    font-weight: 300;
  }
`

const WinsList = styled.div`
  @media (min-width: 829px) {
    text-align: right;
  }
  
  color: #FFF;
  font-size: 14px;
  font-weight: 500;
`

const WinsItem = styled.div`
  @media (min-width: 829px) {
    margin-left: auto;
  }
  
  position: relative;
  max-width: 211px;
  margin-top: 10px;
  border-radius: 4px;
  border: 2px solid #2D2D2D;
  padding: 14px 27px 14px 26px;
  text-align: left;

  color: #FFF;
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
  
  div {
    font-size: 14px;
    font-weight: 400;
  }
  
  b {
    font-size: 16px;
    font-weight: 700;
  }

  &:first-child {
    margin-top: 15px;
    background: #2D2D2D;
  }
  
  &::after {
    position: absolute;
    content: '';
    top: 17px;
    left: -9px;
    width: 20px;
    height: 32px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:nth-child(1)::after {
    background-image: url('${prize_place_1}');
    content: '1';
  }
  &:nth-child(2)::after {
    background-image: url('${prize_place_2}');
    content: '2';
  }
  &:nth-child(3)::after {
    background-image: url('${prize_place_3}');
    content: '3';
  }
`


export default function VotingProjects() {
    const [eventStatus, setEventStatus] = useState(true)

    const changeStatus = () => {
        setEventStatus(prevState => !prevState)
    }

    return (
        <VotingMainStyle>
            <VotingBox>
                <H1Style>Голосование за лучший проект</H1Style>
                <ParStyle>
                    Вы попали на страницу студенческих игровых проектов,
                    которые создаются в рамках <b> проектного обучения </b> студентами <b>2-3 курса института ИРИТ-РтФ
                    УрФУ </b>.
                    Если вы <span>студент</span>, то вы можете отдать свой голос за понравившийся вам проект и
                    поддержать команду.
                </ParStyle>
                <ParStyle>
                    Если вы <span>эксперт</span> из <b> IT-сферы </b>, то приглашаем вас поучаствовать
                    в защитах проектов в составе экспертной комиссии.
                    Подробнее на странице <LinkStyle to={'/'}>Защиты проектов</LinkStyle>
                </ParStyle>
                <TimerVoting countFrom={10} title={'До завершения голосования осталось:'} changeStatus={changeStatus}/>
            </VotingBox>
            <VotingBox>
                <EventTitle>
                    Событие: <span>Осень 2023</span>
                </EventTitle>
                <EventStatus status={eventStatus}>
                    {
                        eventStatus ?
                            'Началось' :
                            'Завершено'
                    }
                </EventStatus>
                <Availability>
                    В наличии:
                    <VoicesBox count={8}>
                        <img src={voices} alt={'Иконка наличии голосов'}/>
                    </VoicesBox>
                </Availability>
                <WinsList>
                    Призы первых мест:
                    <WinsItem>
                        <div>
                            <b>15 баллов </b>
                            + мерч
                        </div>
                        Проектного практикума
                    </WinsItem>
                    <WinsItem>
                        <div>
                            <b>10 баллов </b>
                            + мерч
                        </div>
                        Проектного практикума
                    </WinsItem>
                    <WinsItem>
                        <div>
                            <b>5 баллов </b>
                            + мерч
                        </div>
                        Проектного практикума
                    </WinsItem>
                </WinsList>
            </VotingBox>
        </VotingMainStyle>
    )
}