import React from "react";
import styles from "./FirstPage.module.css"
import FilterOnPage from "../../components/FiltersOnPage/FilterOnPage";

import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import PopularProjects from "../../components/PopularProjects/PopularProjects";
import SelectionProjects from "../../components/SelectionProjects/SelectionProjects";

const FirstPageStyle = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto;
  padding: 0 14px;
  max-width: 1144px;
  
`

function FirstPage() {
  return(
      <FirstPageStyle>
        <FilterOnPage/>
        <div style={{'flex': '1 1', 'minWidth': 0}}>
          <PopularProjects />
          <SelectionProjects />
        </div>
      </FirstPageStyle>
  )
}

export default FirstPage