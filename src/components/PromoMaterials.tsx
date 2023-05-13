import React from "react";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";
import styled from "styled-components";
import icon from "./images/CardPromoDownloadIcon.svg"

const PromoMaterialsStyle = styled.div`
  margin-bottom: 94px;
`

const PPromo = styled.div`
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #B6B6B6;
`

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 30px;
  //justify-content: space-between;
`

const CardStyle = styled.div`
  max-width: 356px;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 16px;
  width: 356px;
  height: 199px;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid #99A2AD;
  border-radius: 3px;
`


const IconInBlock = styled.img`
  position: absolute;
  bottom: 17px;
  right: 18px;
`

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  //margin-bottom: 30px;
`

const LinkDownload = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;

  color: #65A7FF;

`

const Format = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: rgba(208, 230, 238, 0.94);
`

const Par1Div = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: rgba(208, 230, 238, 0.94);

`

const Par23Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Par231 = styled.div`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: white;
`
const Par232 = styled.div`
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: rgba(208, 230, 238, 0.94);
`
const Par233 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  
  color: rgba(208, 230, 238, 0.94);
`



function DescriptionInBlock({par = 1}: {par: 1 | 2 | 3}){
  if (par === 1) return (
      <Par1Div>800x470</Par1Div>
  )
  if (par === 2) return (
      <Par23Div>
        <Par231>Ширина от 1280px</Par231>
        <Par232>Альбомная ориентация</Par232>
        <Par233>16:9</Par233>
      </Par23Div>
  )
  if (par === 3) return (
      <Par23Div>
        <Par231>Высота от 400px</Par231>
        <Par232>Длительность не более 30 секунд</Par232>
        <Par233>16:9</Par233>
      </Par23Div>
  )
  return (
      <div>none</div>
  )
}

function Card({label = 'none', par = 1, format}: { label: string, par: 1 | 2 | 3 , format: string}) {
  return (
      <CardStyle>
        <H2Style style={{
          color: label === 'none' ? "transparent" : "white"
        }}>{label}</H2Style>
        <Block>
          <DescriptionInBlock par={par}></DescriptionInBlock>
          <IconInBlock src={icon}></IconInBlock>
        </Block>
        <CardBottom>
          <LinkDownload>Загрузить</LinkDownload>
          <Format>Формат: {format}</Format>
        </CardBottom>
      </CardStyle>

  )
}

function PromoMaterials() {
  return (
      <PromoMaterialsStyle>
        <H2Style style={{marginBottom: 8}}>Промо-материалы</H2Style>
        <PPromo>Загрузите материалы для демонстрации проекта</PPromo>

        <CardsWrapper>
          <Card label={'Обложка'} par={1} format={'png'}/>
          <Card label={'Изображения проекта'} par={2} format={'png, jpg'}/>
          <Card label={'none'} par={2} format={'png, jpg'}/>
          <Card label={'Видео геймплея'} par={3} format={'mp4'}/>
          <Card label={'none'} par={2} format={'png, jpg'}/>
          <Card label={'none'} par={2} format={'png, jpg'}/>
        </CardsWrapper>

      </PromoMaterialsStyle>
  )
}

export default PromoMaterials