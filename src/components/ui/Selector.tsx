import React from "react";
import styled from "styled-components";
import {H2Style} from "../../pages/ProjectEditing/ProjectEditing";
import {Autocomplete, TextField} from "@mui/material";

const options = ['Первый пункт', 'Второй пункт', 'Третий пункт', 'Четвертый пункт', 'Пятый пункт'];

const SelectorStyle = styled.div`
  margin-bottom: 30px;
`


interface Props {
  labelSelector: string,
}

function Selector({labelSelector = ''}: Props) {
  return (
      <SelectorStyle>
        <H2Style>{labelSelector}</H2Style>
        <Autocomplete
            disablePortal
            id="combo-box-edit-project"
            options={options}
            sx={{ width: 260,
              '& button': {
                marginRight: '0',
                backgroundColor: '#1C1E22',
              },
              '& input': {
                color: 'white',
              },
            }}
            renderInput={(params) => <TextField {...params}/>}
        />
      </SelectorStyle>
  )
}

export default Selector