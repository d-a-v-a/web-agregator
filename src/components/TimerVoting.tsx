import React, {useEffect, useState} from "react";
import styled from "styled-components";
import timer_points from "../assets/images/timer_points.svg"
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";

export type TimerProps = {
    countFrom?: number;
    title?: string;
    changeStatus?: any;
    onTimesup?: () => void;
};

function f(value: number) {
    if (value < 10) {
        return [0, value];
    }
    return (""+value).split("").map(Number);
}

function addToDate(secs: number) {
    const c = Date.now() + secs * 1000;
    return new Date(c);
}

function TimerVoting({ countFrom = 0, onTimesup, title = 'До завершения голосования осталось:', changeStatus }: TimerProps) {
    const [hh, setHh] = useState(countFrom);
    const [mm, setMm] = useState(countFrom);
    const [ss, setSs] = useState(countFrom);
    const [endDate, setEndDate] = useState(addToDate(countFrom));

    function calculateRemainingTime() {
        const r = Math.round((endDate.getTime() - new Date().getTime()) / 1000);
        return Math.max(r, 0);
    }

    useEffect(() => {
        setEndDate(addToDate(countFrom));
    }, [countFrom]);

    useEffect(() => {
        updateTimeParts(calculateRemainingTime());
        const interval = setInterval(() => {
            let r = calculateRemainingTime();
            updateTimeParts(r);
            if (r === 0) {
                clearInterval(interval);
                changeStatus();
                (onTimesup ?? (() => {}))();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    function updateTimeParts(x: number) {
        const hours = Math.floor(x / 3600);
        const minutes = Math.floor((x - hours * 3600) / 60);
        const seconds = x - hours * 3600 - minutes * 60;
        setHh(hours);
        setMm(minutes);
        setSs(seconds);
    }

    return (
        <>
            <H2Style>{title}</H2Style>
            <GridTimerStyle>
                <BoxTimerStyle>
                    <NumberStyle>{f(hh)[0]}</NumberStyle>
                    <NumberStyle>{f(hh)[1]}</NumberStyle>
                    <UnderTextTimer>часов</UnderTextTimer>
                </BoxTimerStyle>
                <PointsStyle src={timer_points}/>
                <BoxTimerStyle>
                    <NumberStyle>{f(mm)[0]}</NumberStyle>
                    <NumberStyle>{f(mm)[1]}</NumberStyle>
                    <UnderTextTimer>минут</UnderTextTimer>
                </BoxTimerStyle>
                <PointsStyle src={timer_points}/>
                <BoxTimerStyle>
                    <NumberStyle>{f(ss)[0]}</NumberStyle>
                    <NumberStyle>{f(ss)[1]}</NumberStyle>
                    <UnderTextTimer>секунд</UnderTextTimer>
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
`

const UnderTextTimer = styled.div`
    width: 100%;
    text-align: center;
    color: #C1D9E2;
    font-size: 13px;
    font-weight: 300;
`

export default TimerVoting