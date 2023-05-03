import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
import History from "./components/History";
import Categories from "./components/Categories";



const FilterOnPageStyle = styled.div`
  
`

function FilterOnPage() {

  return(
      <FilterOnPageStyle>
        <Search/>
        <Categories/>
        <History/>
      </FilterOnPageStyle>
  )
}


export const H2Style = styled.h2`
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: var(--white-color);
`

export default FilterOnPage