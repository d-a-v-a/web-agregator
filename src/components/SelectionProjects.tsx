import React from "react";
import dropdownOutline from "../assets/images/dropdown_outline.svg"
import Pagination from "./ui/Pagination";
import PreviewProject from "./PreviewProject"
import styled from "styled-components";
import image1 from "../assets/images/image1.jpg"


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
`

const FoundStyle = styled.span`
    flex: 1 1;
    font-size: 20px;
    color: var(--light-grey-color);
`

const DropdownHeadStyle = styled.div`
    cursor: pointer;
    padding: 5px 15px 5px 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 500;
    font-size: 12px;

    color: var(--light-grey-color);

    border-radius: 3px;
    border: 1px solid var(--light-grey-color);;
`

const Grid = styled.div`
    margin-top: 15px;
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
    
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
    const divs = Array(15).fill(10).map((_, i) => <PreviewProject key={i} views={'1555'} rating={'4,5'} image={image1} category='Аркады' name='Merge Комбинаторика'/>)
    return (
        <div style={{maxWidth: 810}}>
            <HeaderSelectProjects>
                <H2Style>Подборка проектов &gt;</H2Style>
                <Options>
                    <FoundStyle>Найдено 31 проект</FoundStyle>
                    <Pagination current={1} total={5}/>
                    <div>
                        <DropdownHeadStyle>
                            <span>По популярности</span>
                            <img src={dropdownOutline} alt=""/>
                        </DropdownHeadStyle>
                        <div></div>
                    </div>
                </Options>
            </HeaderSelectProjects>
            <Grid>
                {divs}
            </Grid>
        </div>
    )
}

export default SelectionProjects