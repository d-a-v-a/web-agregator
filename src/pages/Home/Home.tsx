import React from "react";
import FilterOnPage from "../../components/FiltersOnPage/FilterOnPage";
import styled from "styled-components";
import SelectionProjects from "../../components/SelectionProjects";
import PopularProjects from "../../components/PopularProjects";

const HomeStyle = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto 74px;
  max-width: 1144px;
`

function Home() {
  return(
      <HomeStyle>
        <FilterOnPage/>
        <div>
          <PopularProjects />
          <SelectionProjects />
        </div>
      </HomeStyle>
  )
}

export default Home