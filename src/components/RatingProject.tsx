import React from "react";
import styled from "styled-components";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";
import prize_place_default from "../assets/images/icons/place_flag/place_default.svg"
import prize_place_1 from "../assets/images/icons/place_flag/place_1.svg"
import prize_place_2 from "../assets/images/icons/place_flag/place_2.svg"
import prize_place_3 from "../assets/images/icons/place_flag/place_3.svg"
import voices_svg from "../assets/images/icons/voices.svg"

export type TypeRating = {
    title?: string;
    currentPlace: number;
    fullVoices: number;
    currentVoices: number;
    endVoting?: boolean;
    button?: boolean;
};

function RatingProject({
                           title = 'Рейтинг проекта',
                           button,
                           currentPlace,
                           fullVoices,
                           currentVoices,
                           endVoting = false
                       }: TypeRating) {
    let percentVoices: number = (currentVoices / fullVoices) * 100;
    let nextPlace: number = currentPlace - 1;

    if (endVoting) nextPlace = 0

    return (
        <RatingProjectStyle>
            <H2Style>{title}</H2Style>
            <RatingLine>
                <PlaceStyle placeNum={currentPlace}/>
                {/* <Badge number={currentPlace}></Badge> */}

                <ProgressLine percentVoices={percentVoices} nextPlace={nextPlace}>
                    <div>
                        <div></div>
                    </div>
                </ProgressLine>
                <PlaceStyle placeNum={nextPlace}/>
            </RatingLine>
            <StatVoices>
                <img src={voices_svg} alt="Иконка голосов"/>
                <span>
                    {currentVoices} / {fullVoices}
                </span>
            </StatVoices>
            <TitleSmall>Отдано голосов</TitleSmall>
            <GiveVices>
                <img src={voices_svg} alt="Иконка голосов"/>
                <span>{currentVoices}</span>
            </GiveVices>
            {button && <VoteButtonStyle disabled={endVoting} type={'button'}>
                <div>Проголосовать</div>
                <div>
                    <span>Отдать</span>
                    <span>-5</span>
                    <img src={voices_svg} alt="Иконка голосов"/>
                </div>
            </VoteButtonStyle>}
        </RatingProjectStyle>
    );
}

const RatingProjectStyle = styled.div`
    margin-bottom: 50px;
`

const StatVoices = styled.div`
    margin: -5px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    img {
        display: block;
        flex: 0 0 20px;
        height: 20px;
    }

    span {
        display: block;
        color: #D0E6EE;
        font-size: 14px;
        font-weight: 600;
    }
`

const VoteButtonStyle = styled.button`
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 51px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #D0E6EE;
    font-size: 20px;
    font-weight: 600;

    border-radius: 3px;
    border: 1px solid #5A9DF5;
    background: #282828;

    transition: 0.3s ease-in-out;

    div:first-child {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: 0.2s ease-in-out 0.4s;
        color: #D0E6EE;
    }

    div:last-child {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease-in-out 0.4s;
        visibility: hidden;
        opacity: 0;
        color: #D0E6EE;

        span:first-child {
            color: #FF8197;
            margin-right: 5px;
        }

        span:last-child {
            color: #fff;
        }

        img {
            display: block;
            flex: 0 0 28px;
            height: 28px;
        }
    }

    &:disabled {
        cursor: auto;
        border-color: rgba(208, 230, 238, 0.50);
        color: rgba(208, 230, 238, 0.50);
    }

    &:hover:not(:disabled) {
        border-color: #FF8197;

        div:first-child {
            visibility: hidden;
            opacity: 0;
        }

        div:last-child {
            visibility: visible;
            opacity: 1;
        }
    }

    &:active:not(:disabled) {
        background: var(--main-bg);
    }
`

const TitleSmall = styled.div`
    margin-bottom: 4px;
    color: #B6B6B6;
    font-size: 18px;
    font-weight: 400;
`

const GiveVices = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;

    img {
        flex: 0 0 24px;
        height: 38px;
        object-fit: contain;
    }

    span {
        color: #D0E6EE;
        font-size: 24px;
        font-weight: 700;
    }
`

const RatingLine = styled.div`
    display: flex;
    align-items: center;

    &::before, ::after {
        display: block;
    }
`

const ProgressLine = styled.div<{ percentVoices: number, nextPlace: number }>`
    position: relative;
    flex: 1 1;
    height: 17px;
    margin: 0 -2px;
    padding: 1px;
    background: linear-gradient(to right, #C25506, #CD7F32);

    ${({nextPlace}) => (nextPlace == 1 || nextPlace == 0) ?
            `background: linear-gradient(90deg, #E47B00 3.32%, #EBAA03 84.68%, #FFEF5C 105.16%);` :
            (nextPlace == 2) ?
                    `background: linear-gradient(90deg, #56708A 0%, #8C98A5 62.22%, #CAE4FF 113.1%);` : ''
    }
    > div {
        width: 100%;
        height: 100%;
        background: #2c2c2c;
        padding: 2px 3px;

        > div {
            width: ${p => (p.percentVoices ? p.percentVoices : 0)}%;
            height: 100%;
            border-right: ${p => (p.percentVoices != 100 ? '3px solid #FFF' : '')};
            background: linear-gradient(to right, #C25506, #CD7F32);

            ${({nextPlace}) => (nextPlace == 1 || nextPlace == 0) ?
                    `background: linear-gradient(90deg, #E47B00 3.32%, #EBAA03 84.68%, #FFEF5C 105.16%);` :
                    (nextPlace == 2) ?
                            `background: linear-gradient(90deg, #56708A 0%, #8C98A5 62.22%, #CAE4FF 113.1%);` : ''
            }
        }
    }
`

const PlaceStyle = styled.div<{ placeNum: number }>`
    position: relative;
    z-index: 1;

    flex: 0 0 27px;
    height: 43px;
    padding-top: 10px;

    text-align: center;
    color: #FFF;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.9px;

    background-color: var(--main-bg);
    background-image: url('${prize_place_default}');
    background-position: center;
    background-size: contain;

    background: ${p => (p.placeNum == 0 ? 'none' : '')};


    &::after {
        content: '${p => (p.placeNum ? p.placeNum : '')}';
        display: block;
        text-align: center;
        color: #FFF;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -0.9px;
    }

    ${({placeNum}) => (placeNum == 1) ?
            `background-image: url('${prize_place_1}');` :
            (placeNum == 2) ?
                    `background-image: url('${prize_place_2}');` :
                    (placeNum == 3) ?
                            `background-image: url('${prize_place_3}');` : ''
    }
`

export default RatingProject