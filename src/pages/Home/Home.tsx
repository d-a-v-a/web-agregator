import React from "react";
import FilterOnPage from "../../components/FiltersOnPage/FilterOnPage";
import styled from "styled-components";
import SelectionProjects from "../../components/SelectionProjects/SelectionProjects";
import PopularProjects from "../../components/PopularProjects/PopularProjects";

const FirstPageStyle = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto 60px;
  padding: 0 14px;
  max-width: 1144px;
  
`



function Home() {
  return(
      <FirstPageStyle>
        <FilterOnPage/>
        <div>
          <PopularProjects />
          <SelectionProjects />
        </div>
      </FirstPageStyle>
  )
}

export default Home