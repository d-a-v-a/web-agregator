import React from "react";
import styled from "styled-components";

import SelectionProjects from "../../components/SelectionProjects";
import PopularProjects from "../../components/PopularProjects";
import Search from "../../components/Aside/components/Search";
import Categories from "../../components/Aside/components/Categories";
import History from "../../components/Aside/components/History";
import {AsideStyle} from "../../components/Aside/AsideStyle";
import VotingProjects from "../../components/VotingProjects";
import Select from "../../components/Select";

const HomeStyle = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto 74px;
  max-width: 1184px;
  padding: 0 20px;
  
  @media (max-width: 1165px) {
    flex-direction: column;
  }
`

const Home = () => {
  return(
      <HomeStyle>
          <AsideStyle>
              {/*<Search/>*/}
              <Select selectVoting={true} value={'Осень 2023'} options={['Осень 2023', 'Весна 2023', 'Осень 2022', 'Осень 2023', 'Весна 2023', 'Осень 2022']}/>
              <Categories/>
              <History title={'Иcтория'}/>
          </AsideStyle>
          <div>
              <VotingProjects/>
              <PopularProjects />
              <SelectionProjects />
          </div>
      </HomeStyle>
  )
}

export default Home