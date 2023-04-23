import React from "react";
import Button from "../ui/Button/Button";
import image1 from "../../assets/images/image1.jpg"
import styled from "styled-components";

const CardWrapper = styled.div`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  background-color: var(--dark-grey-color);
`

const HeadStyle = styled.div`
  height: 136px;
  overflow: hidden;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
`

const DescriptionStyle = styled.div`
  padding: 12px 17px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "category button"
                         "name button";
`

const Category = styled.div`
  grid-area: category;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 4px;

  color: rgba(255, 255, 255, 0.8);
`

const Name = styled.div`
  grid-area: name;
  font-weight: 600;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;

  color: var(--white-color);

`

const ButtonStyle = styled.div`
  grid-area: button;
  display: flex;
  align-items: center;
`


export interface Props {
    image: any;
    category: string;
    name: string;
}
const PreviewProject: React.FC<Props> = ({image = image1, category = 'Аркады', name = 'Merge Комбинаторика'}: Props) => {
    return (
        <CardWrapper>
            <HeadStyle>
                <img style={{maxWidth: '100%', objectFit: "cover"}} src={image} alt=""/>
            </HeadStyle>
            <DescriptionStyle>
                <Category>{category}</Category>
                <Name>{name}</Name>
                <ButtonStyle>
                    <Button>Играть</Button>
                </ButtonStyle>
            </DescriptionStyle>
        </CardWrapper>
    )
}

export default PreviewProject;