import React from "react";
import styles from "./FirstPage.module.css"
import NavigationForProjects from "../../components/NavigationForProjects/NavigationForProjects";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const FirstPageStyle = styled.div`
  margin: 0 auto;
  padding: 53px 162px 0;
  background-color: #1C1E22;
`


function FirstPage() {
  return(
      <FirstPageStyle>
        <NavigationForProjects/>
        <Footer/>
      </FirstPageStyle>
  )
}

export default FirstPage