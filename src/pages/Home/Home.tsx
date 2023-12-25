import React, {useState} from "react";
import styled from "styled-components";

import SelectionProjects from "../../components/SelectionProjects";
import PopularProjects from "../../components/PopularProjects";
import Categories from "../../components/Aside/components/Categories";
import History from "../../components/Aside/components/History";
import {AsideStyle} from "../../components/Aside/AsideStyle";
import VotingProjects from "../../components/VotingProjects";
import Select from "../../components/Select";

const HomeStyle = styled.div`
  display: flex;
  gap: 2.4rem;
  margin: 0 auto 7.4rem;
  max-width: 118.4rem;
  padding: 0 2rem;
  
  @media (max-width: 1165px) {
    flex-direction: column;
  }
`

const Home = () => {
    const [seasonVoting, setSeasonVoting] = useState('Осень 2023');

    return (
        <HomeStyle>
            <AsideStyle>
                <Select selectVoting={true} value={seasonVoting} setState={setSeasonVoting}
                        options={['Осень 2023', 'Весна 2023', 'Осень 2022', 'Осень 2023', 'Весна 2023', 'Осень 2022']}/>
                <Categories/>
                <History title={'Иcтория'}/>
            </AsideStyle>
            <div>
                <VotingProjects countVoices={35}/>
                <PopularProjects/>
                <SelectionProjects/>
            </div>
        </HomeStyle>
    )
}

export default Home