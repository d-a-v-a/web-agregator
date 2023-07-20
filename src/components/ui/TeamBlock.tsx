import React from "react";
import {InputBox, ProfileInput, TitleInput} from "../../pages/Profile/components/Information";
import {TeamInterface} from "../../interfaces/Team.interface";


const dataTeam: TeamInterface = {
  TeamName: 'DreamTeam',
  Members: [
    {name: 'Игорь', group: 'РИ-210912', role: 'Конципт дизанер', contacts: '+79564756354'},
    {name: 'Игорь', group: 'РИ-210912', role: 'Конципт дизанер', contacts: '+79564756354'},
    {name: 'Игорь', group: 'РИ-210912', role: 'Конципт дизанер', contacts: '+79564756354'},
    {name: 'Игорь', group: 'РИ-210912', role: 'Конципт дизанер', contacts: '+79564756354'},

  ]

}

const TeamBlock = () => {
  return (
      <>
        <TitleInput>Ваша команда</TitleInput>
        <InputBox>
          <ProfileInput disabled={true} readOnly={true} value={dataTeam.TeamName}/>
        </InputBox>

      </>
  )
}

export default TeamBlock