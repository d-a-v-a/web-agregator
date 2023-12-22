import React, {useEffect, useState} from "react";
import styled from "styled-components";
import timer_points from "../assets/images/icons/timer_points.svg"
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";

export type TimerProps = {
    finishDate: string;
    title?: string;
    changeStatus?: any;
};


function TimerVoting({finishDate, title = 'До завершения голосования осталось:', changeStatus}: TimerProps) {
    const deadline = new Date(finishDate);
    const [time, setTime] = useState(
        Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
    );
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');

    const decrement = () =>
        setTime((prevTime) => {
            return prevTime === 0 ? 0 : prevTime - 1;
        });

    useEffect(() => {
        const id = setInterval(decrement, 1000);

        const newDays = format(Math.floor(time / (3600 * 24)));
        setDays(prev => prev !== newDays ? newDays : prev);

        const newHours = format(Math.floor((time / 3600) % 24));
        setHours(prev => prev !== newHours ? newHours : prev);

        const newMinutes = format(Math.floor((time / 60) % 60));
        setMinutes(prev => prev !== newMinutes ? newMinutes : prev);

        return () => clearInterval(id);
    }, [time]);

    const format = (num: number): string => {
        return num < 10 ? '0' + num : num.toString();
    };


    return (
        <>
            <H2Style>{title}</H2Style>
            <GridTimerStyle>
                <BoxTimerStyle>
                    <NumberStyle>{days[0]}</NumberStyle>
                    <NumberStyle>{days[1]}</NumberStyle>
                    <UnderTextTimer>дней</UnderTextTimer>
                </BoxTimerStyle>
                <PointsStyle src={timer_points}/>
                <BoxTimerStyle>
                    <NumberStyle>{hours[0]}</NumberStyle>
                    <NumberStyle>{hours[1]}</NumberStyle>
                    <UnderTextTimer>часов</UnderTextTimer>
                </BoxTimerStyle>
                <PointsStyle src={timer_points}/>
                <BoxTimerStyle>
                    <NumberStyle>{minutes[0]}</NumberStyle>
                    <NumberStyle>{minutes[1]}</NumberStyle>
                    <UnderTextTimer>минут</UnderTextTimer>
                </BoxTimerStyle>
            </GridTimerStyle>
        </>
    );
}

const GridTimerStyle = styled.div`
    display: flex;
`

const BoxTimerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 80px;
    column-gap: 4px;
`

const NumberStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    flex: 1 1;
    height: 67px;
    border-radius: 4px;
    background: #2D2D2D;

    color: #FFF;
    font-size: 36px;
    font-weight: 600;
    line-height: 146.5%;
    letter-spacing: -0.792px;
`

const PointsStyle = styled.img`
    margin: -16px 10px 0;
    animation: points 1s ease-in-out infinite;

    @keyframes points {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const UnderTextTimer = styled.div`
    width: 100%;
    text-align: center;
    color: #C1D9E2;
    font-size: 13px;
    font-weight: 300;
`

export default TimerVoting