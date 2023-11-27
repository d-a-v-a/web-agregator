import React, {useState} from "react";
import styled from "styled-components";
import {H1Style} from "../pages/ProjectEditing/ProjectEditing";
import {Link} from "react-router-dom";
import TimerVoting from "./TimerVoting";
import voices from "../assets/images/icons/voices.svg"





export default function VotingProjects() {
    const [eventStatus, setEventStatus] = useState(true)

    const changeStatus = () => {
        setEventStatus(prevState => !prevState)
    }

    const countTime = Math.round((new Date(2024, 11-1, 9, 20).getTime() - new Date().getTime())/1000);

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
                <TimerVoting countFrom={countTime} title={'До завершения голосования осталось:'} changeStatus={changeStatus}/>
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
                      <Badge number={1} />
                        <div>
                            <b>15 баллов </b>
                            + мерч
                        </div>
                        Проектного практикума
                    </WinsItem>
                    <WinsItem>
                      <Badge number={2} />
                        <div>
                            <b>10 баллов </b>
                            + мерч
                        </div>
                        Проектного практикума
                    </WinsItem>
                    <WinsItem>
                      <Badge number={3} />
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

export const Badge = ({number: number = 0, top = "17px", left = "-10px", position = false}) => {
  return (
    <BadgeWrapper top={top} left={left} position={position}>
      <BadgeContent>
      <BadgeImage>
      <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="linear-gradient1" x1="0" y1="0" x2="5%" y2="90%">
          <stop offset="11.13%" stopColor="#E47B00"/>
          <stop offset="51.27%" stopColor="#EBAA03"/>
          <stop offset="92.29%" stopColor="#FFEF5C"/>
        </linearGradient>
        <linearGradient id="linear-gradient2" x1="0" y1="0" x2="5%" y2="90%">
          <stop offset="8.02%" stopColor="#56708A"/>
          <stop offset="49.04%" stopColor="#8C98A5"/>
          <stop offset="106.46%" stopColor="#CAE4FF"/>
        </linearGradient>
        <linearGradient id="linear-gradient3" x1="0" y1="0" x2="5%" y2="90%">
          <stop offset="8.02%" stopColor="#C25506"/>
          <stop offset="106.46%" stopColor="#CD7F32"/>
        </linearGradient>
        {number == 1 ? <path d="M2 0H10H18C19.1046 0 20 0.88281 20 1.98738V31.244C20 34.6613 10 25.3857 10 25.3857C10 25.3857 0 34.6613 0 31.244V1.98738C0 0.88281 0.895431 0 2 0Z" fill="url(#linear-gradient1)"/> 
          : number == 2 ? <path d="M2 0H10H18C19.1046 0 20 0.88281 20 1.98738V31.244C20 34.6613 10 25.3857 10 25.3857C10 25.3857 0 34.6613 0 31.244V1.98738C0 0.88281 0.895431 0 2 0Z" fill="url(#linear-gradient2)"/>
          : number == 3 ? <path d="M2 0H10H18C19.1046 0 20 0.88281 20 1.98738V31.244C20 34.6613 10 25.3857 10 25.3857C10 25.3857 0 34.6613 0 31.244V1.98738C0 0.88281 0.895431 0 2 0Z" fill="url(#linear-gradient3)"/>
          : <path d="M2 0H10H18C19.1046 0 20 0.88281 20 1.98738V31.244C20 34.6613 10 25.3857 10 25.3857C10 25.3857 0 34.6613 0 31.244V1.98738C0 0.88281 0.895431 0 2 0Z" fill="#474747"/>}
      </svg>
      </BadgeImage>
      <BadgeText>{number}</BadgeText>
      </BadgeContent>
    </BadgeWrapper>
  )
}

const BadgeWrapper = styled.div<{top: string, left: string, position: boolean}>`
  position: absolute;

  left: ${props => props.left};
  top: ${props => props.top};


  &:after {
    content: "место";
    display: ${props => props.position ? 'block' : 'none'};

    position: absolute;

    top: 20%;
    left: 110%;

    color: var(--Headline-2nd, #B6B6B6);
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.78px;
  }

  max-width: 20px;
  max-height: 32px;
`

const BadgeText = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  top: 15%;
  


  color: white ;
      text-align: center;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.7px;
`

const BadgeContent = styled.div`
  position: relative;
`




const BadgeImage = styled.div`
  & svg path {
    fill: linear-gradient(164deg, #E47B00 11.13%, #EBAA03 51.27%, #FFEF5C 92.29%);
  }

   
`

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

  display: flex;
  flex-direction: column;
  
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
`