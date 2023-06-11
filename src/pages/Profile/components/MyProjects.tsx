import React, {useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import {H2Style} from "../../ProjectEditing/ProjectEditing";
import Selector from "../../../components/ui/Selector";
import {Context} from "../Context";

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
        <P>Создать команду может только Team Lead</P>


      </MyProjectStyle>
  )
}

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
