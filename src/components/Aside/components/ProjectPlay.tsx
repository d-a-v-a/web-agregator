import React from "react";
import styled from "styled-components";
import {H2Style} from "../../../pages/ProjectEditing/ProjectEditing";
import {Link} from "react-router-dom";

const ProjectPlayStyle = styled.div`
  margin-bottom: 5rem;
`

const ImageStyled = styled.img`
  display: inline-block;
  margin-bottom: 22.5rem;
  object-fit: cover;
  width: 26.1rem;
  height: 15.3rem;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
`


const ButtonStyled = styled(Link)`
    width: 100%;
    height: 5.1rem;
    font-weight: 600;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    background: linear-gradient(0deg, #16CD57 0%, #16CD57 100%), linear-gradient(180deg, #60FB9E 0%, #1EFE77 0.01%, #16CD57 48.77%, #0D9834 100%);

    border-radius: 3px;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 1162.5rem) {
        max-width: 26.2rem;
        width: auto;
    }
`

interface ProjectPlayProps {
    name: string;
    image: any;
    path?: string;
}

const ProjectPlay = ({name, image, path = ''}: ProjectPlayProps) => {
    return (
        <ProjectPlayStyle>
            <H2Style>{name}</H2Style>
            <ImageStyled src={image}/>
            <ButtonStyled to={path}> Играть </ButtonStyled>
        </ProjectPlayStyle>
    )
}

export default ProjectPlay