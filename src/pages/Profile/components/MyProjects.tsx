import React, {useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import {H2Style} from "../../ProjectEditing/ProjectEditing";
import Selector from "../../../components/ui/Selector";
import {Context} from "../Context";
import InputProfile from "../../../components/ui/InputProfile";

interface IMemberTeam {
  id: number;
  role: string;
}

function MemberTeam({id, role}: IMemberTeam) {
  return (
      <MemberCommandStyle>
        <H2Style>Участник команды #{id}</H2Style>
        <InputProfile placeholder={'Фамилия Имя, Академ группа'} margin={15}/>
        <BottomMember>
          <Role><span style={{color: '#B6B6B6'}}>Роль:</span> {role}</Role>
          <ContactsMember>Контакты</ContactsMember>
        </BottomMember>

      </MemberCommandStyle>

  )
}


interface ButtonSeasonProps {
  label: string,
  disable?: boolean,
  select: boolean,
}

function ButtonSeason({label = '', disable = false, select}: ButtonSeasonProps) {
  let color
  if (select) {
    color = '#5A9DF5'
  } else {
    color = '#282828'
  }
  return (
      <>
        {disable ? (<ButtonSeasonStyle disabled={true}>{label}</ButtonSeasonStyle>)
            : (<ButtonSeasonStyle style=
                                      {{
                                        backgroundColor: color,
                                      }}>{label}</ButtonSeasonStyle>)}
      </>
  )
}

const MyProjects = () => {
  const [countMembers, setCountMembers] = useState(1)
  const [activeButton, setActiveButton] = useState(0)

  // @ts-ignore
  const {SetLabel, SetBtn} = useContext(Context)

  useEffect(() => {
    SetLabel('Мои проекты')
    SetBtn(true)
  }, []);

  return (
      <MyProjectStyle>
        <H2Style style={{
          marginBottom: 8,
        }}>Выбор проектов</H2Style>
        <P style={{
          fontSize: 18,
        }}>выберите учебный семестр</P>

        <ButtonSeasonWrapper>
          {[...Array(4)].map((_, idx) => (
              <div key={idx}>
                <div onClick={() => setActiveButton(idx)}>
                  <ButtonSeason label={'Осень 2022'} select={idx === activeButton}/>
                </div>
              </div>
          ))}
        </ButtonSeasonWrapper>
        <Selector
            width={'356px'}
            margin={'10px'}
            labelSelector={'Роль в команде*'}
            options={[
              'Team Lead', 'UI/UX-дизайнер', 'Game-дизайнер', 'Unity-разработчик', 'Художник',
              'UE-разработчик',
            ]}
        />
        <P style={{marginBottom: 47}}>Создать команду может только Team Lead</P>

        <CommandBlock>
          <H2Style>Название команды*</H2Style>
          <InputProfile placeholder={'Введите название'} counter={true} maxLength={20}/>
          <H2Style>Участник команды #1</H2Style>
          <TeamLeadBlock>Фамилия Имя, Академ группа</TeamLeadBlock>
          <BottomMember>
            <Role><span style={{color: '#B6B6B6'}}>Роль:</span> Team Lead</Role>
            <ContactsMember>Контакты</ContactsMember>
          </BottomMember>
          <MemberTeam id={2} role={'UI/UX Дизайнер'}/>
        </CommandBlock>
      </MyProjectStyle>
  )
}

const Role = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #D0E6EE;
`

const ContactsMember = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  
  text-decoration-line: underline;
  
  color: #C1D9E2;
`

const BottomMember = styled.div`
  margin-bottom: 47px;
  display: flex;
  justify-content: space-between;
`

const MemberCommandStyle = styled.div`

`


const CommandBlock = styled.div`

`

const TeamLeadBlock = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 59px;
  padding-left: 37px;
  background-color: #2D2D2D;

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  color: #C1D9E2;

`

const ButtonSeasonWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 47px;
`

const ButtonSeasonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: 44px;
  border: 1px solid #5A9DF5;
  border-radius: 3px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;


  cursor: pointer;

  &:disabled {
    color: rgba(208, 230, 238, 0.5);
    border-color: rgba(208, 230, 238, 0.5);
    cursor: unset;
  }
`

const MyProjectStyle = styled.div`

`

const P = styled.div`
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: rgba(208, 230, 238, 0.94);
`

export default MyProjects