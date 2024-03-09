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

    const seasonsOptions: string[] = []

    const seasonsData = [
        {
            title: 'Весна 2022',
            finishDate: '2022-06-01 00:00',
            countVoices: 40
        },
        {
            title: 'Осень 2022',
            finishDate: '2023-01-01 00:00',
            countVoices: 30
        },
        {
            title: 'Весна 2023',
            finishDate: '2023-06-01 00:00',
            countVoices: 35
        },
        {
            title: 'Осень 2023',
            finishDate: '2024-01-01 00:00',
            countVoices: 55
        }
    ]
    seasonsData.forEach(el => {
        seasonsOptions.push(el.title)
    })


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

    const [seasonVoting, setSeasonVoting] = useState('Осень 2023');
  return(
      <HomeStyle>
          <AsideStyle>
              <Select selectVoting={true} value={seasonVoting} setState={setSeasonVoting}
                                  options={seasonsOptions}/>
              <Categories/>
              <History title={'Иcтория'}/>
          </AsideStyle>
          <div>
              <VotingProjects seasonsData={seasonsData} season={seasonVoting}/>
              <PopularProjects />
              <SelectionProjects />
          </div>
      </HomeStyle>
  )
}

export default Home