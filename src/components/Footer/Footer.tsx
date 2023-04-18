import React from "react";
import styles from "./Footer.module.css"
import styled from "styled-components";
import logo from "../../assets/images/Group 441.png"
import vkIcon from "../../assets/images/VK.svg"
import internetIcon from "../../assets/images/InternetIcon.svg"
import tgIcon from "../../assets/images/TGIcon.svg"


const FooterStyle = styled.div`
  margin: 0 auto;
  padding: 46px 117px 80px;
  width: 926px;
  border-top: 2px solid #2D2D2D;
`


function Footer() {
  return (
      <FooterStyle>
        <SectionOneFooter/>
        <SectionTwoFooter/>
      </FooterStyle>
  )
}

const SectionOneFooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 27px;
`


function SectionOneFooter() {
  return (
      <SectionOneFooterStyle>
        <img src={logo} className={styles.logo} alt=""/>
        <img src={vkIcon} className={styles.Icon} alt=""/>
        <img src={internetIcon} className={styles.Icon} alt=""/>
        <img src={tgIcon} className={styles.Icon} alt=""/>
      </SectionOneFooterStyle>
  )
}

const SectionTwoFooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LinkForFooterStyle = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #99A2AD;
  cursor: pointer;
`

function LinkForFooter({txtLink = "ссылка"}:{txtLink: string}) {
  return(
      <LinkForFooterStyle>
        {txtLink}
      </LinkForFooterStyle>
  )
}


function SectionTwoFooter() {
  return(
      <SectionTwoFooterStyle>
        <LinkForFooter txtLink={"Площадка проектов"}/>
        <LinkForFooter txtLink={"Защиты проектов"}/>
        <LinkForFooter txtLink={"Заказать проект"}/>
        <LinkForFooter txtLink={"Обучение команды"}/>
      </SectionTwoFooterStyle>
  )
}


export default Footer