import React from "react";
import dropdownOutline from "../../assets/images/dropdown_outline.svg"
import Pagination from "../ui/Pagination/Pagination";
import PreviewProject from "../PreviewProject/PreviewProject"
import styled from "styled-components";
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"


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
    margin-bottom: 30px;
`

const FoundStyle = styled.span`
    flex: 1 1;
    font-size: 20px;
    color: #99A2AD;
`

const DropdownHeadStyle = styled.div`
    cursor: pointer;
    padding: 5px 15px 5px 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 500;
    font-size: 12px;

    color: #99A2AD;

    border-radius: 3px;
    border: 1px solid #99A2AD;
`

const Grid = styled.div`
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
    
    & > div {
        flex: 0 0 calc(33.3% - 25px);
    }
`

const SelectionProjects = () => {
    const divs = Array(15).fill(10).map((_, i) => <PreviewProject key={i} image={image1} category='Аркады' name='Merge Комбинаторика'/>)
    return (
        <div>
            <H2Style>Подборка проектов &gt;</H2Style>
            <Options>
                <FoundStyle>Найдено 31 проект</FoundStyle>
                <Pagination current='1' total='5'/>
                <div>
                    <DropdownHeadStyle>
                        <span>По популярности</span>
                        <img src={dropdownOutline} alt=""/>
                    </DropdownHeadStyle>
                    <div></div>
                </div>
            </Options>
            <Grid>
                {divs}
            </Grid>
        </div>
    )
}

export default SelectionProjects