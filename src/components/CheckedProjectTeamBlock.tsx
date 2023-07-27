import React from "react";
import TeamBlock from "./ui/TeamBlock";
import styled from "styled-components";
import {TitleInput} from "../pages/Profile/components/Information";
import img from "../assets/images/project/1.jpg"
import Statistics from "./Aside/components/Statistics";

const CheckedProjectTeamBlock = () => {
  return(
      <>
        <PreviewProject>
          <div style={{marginRight: '95px'}}>
            <TitleInput>Merge Комбинаторика</TitleInput>
            <img style={{width: '260px', height: '153px'}} src={img} alt={'нан'}/>
          </div>
          <div>
            <PublicationDate>Проект опубликован <span style={{color: 'white'}}>24.03.2022</span></PublicationDate>
            <Statistics onlyRating={true}/>

          </div>
        </PreviewProject>

        <TeamBlock/>
      </>
  )
}

const PublicationDate = styled.div`
  margin-bottom: 16px;
  color: var(--d-0-e-6-ee, rgba(208, 230, 238, 0.50));
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const PreviewProject = styled.div`
  display: flex;
`

export default CheckedProjectTeamBlock