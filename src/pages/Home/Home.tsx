import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SelectionProjects from "../../components/SelectionProjects";
import PopularProjects from "../../components/PopularProjects";
import Categories from "../../components/Aside/components/Categories";
import History from "../../components/Aside/components/History";
import {AsideStyle} from "../../components/Aside/AsideStyle";
import VotingProjects from "../../components/VotingProjects";
import Select from "../../components/Select";
import { useData } from "../../context/DataContext";
import { getFullInfAboutProjects, getProfile } from "../../api/api";
import { ProjectInteface } from "../../interfaces/Project.interface";
import { projects } from "../../projects";

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


  const {data, setValues} = useData();

  useEffect(() => {
    const fetchPosts = async () => {
      setValues({ allProjectsInformation: projects, isLoadingProjectInf: true });
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const resp: ProjectInteface[] | null = await getFullInfAboutProjects();
  //     setValues({ allProjectsInformation: resp, isLoadingProjectInf: true });
  //   };
  //   fetchPosts();
  // }, []);

  return(
      <HomeStyle>
          <AsideStyle>
              <Select selectVoting={true} value={'Осень 2023'} options={['Осень 2023', 'Весна 2023', 'Осень 2024', 'Весна 2024', 'Осень 2025', 'Весна 2025']}/>
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