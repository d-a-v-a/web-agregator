import React from "react";
import Pagination from "./ui/Pagination";
import PreviewProject from "./PreviewProject"
import styled from "styled-components";
import image1 from "../assets/images/image1.jpg"
import Select from "./Select";


const H2Style = styled.h2`
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 26px;
    color: var(--white-color);
`

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  flex-wrap: wrap;
  

  @media (max-width: 676px) {
    span:first-child {
      flex: 1 1 100%;
    }
  }
`

const FoundStyle = styled.span`
    flex: 1 1;
    font-size: 20px;
    color: var(--light-grey-color);
`

const Grid = styled.div`
    margin-top: 15px;
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
  
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    display: flex;
     flex-direction: column;
    column-gap: 25px;
    max-width: 300px;
    margin: 0 auto;
  }
  
    & > div {
        flex: 0 0 calc(33.3% - 25px);
    }
`
const HeaderSelectProjects = styled.div`
    position: sticky;
    padding: 15px 0 15px;
    top: 63px;
    background-color: var(--main-bg-color);
    z-index: 1000;
`

const SelectionProjects = () => {
    const divs = Array(15).fill(10).map((_, i) => <PreviewProject key={i} path={'/project'} views={'12333'} rating={'4,5'} image={image1} category='Аркады' name='Merge Комбинаторика'/>)
    return (
        <div style={{maxWidth: 810}}>
            <HeaderSelectProjects>
                <H2Style>Подборка проектов &gt;</H2Style>
                <Options>
                    <FoundStyle>Найдено 31 проект</FoundStyle>
                    <Pagination current={1} total={5}/>
                    <Select value={'По популярности'} options={['По популярности', 'По дате выхода', 'По оценкам']}/>
                </Options>
            </HeaderSelectProjects>
            <Grid>
                {divs}
            </Grid>
        </div>
    )
}

export default SelectionProjects