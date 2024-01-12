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
  gap: 2.4rem;
  margin: 0 auto 7.4rem;
  max-width: 118.4rem;
  padding: 0 2rem;
  
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
}

export default Home