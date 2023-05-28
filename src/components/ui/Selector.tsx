import React, {useState} from "react";
import styled from "styled-components";
import {H2Style} from "../../pages/ProjectEditing/ProjectEditing";
import Select from "../Select";

const options = ['Первый пункт', 'Второй пункт', 'Третий пункт', 'Четвертый пункт', 'Пятый пункт'];

const SelectorStyle = styled.div`
  margin-bottom: 30px;
`

const SelectBox = styled.div`
  padding: 11px 18px;
  background: var(--dark-grey-color);
`

interface Props {
  labelSelector: string;
  options: any;
  margin?: string;
  width?: string;
}

function Selector({labelSelector = '', options, margin = '30px', width = '100%'}: Props) {
  return (
      <SelectorStyle style={{
        marginBottom: margin,
        width: width,
      }}>
        <H2Style>{labelSelector}</H2Style>
        <SelectBox>
            <Select options={options}/>
        </SelectBox>

        {/*<Autocomplete*/}
        {/*    disablePortal*/}
        {/*    id="combo-box-edit-project"*/}
        {/*    options={options}*/}
        {/*    sx={{ width: 260,*/}
        {/*      '& button': {*/}
        {/*        marginRight: '0',*/}
        {/*        backgroundColor: '#1C1E22',*/}
        {/*      },*/}
        {/*      '& input': {*/}
        {/*        color: 'white',*/}
        {/*      },*/}
        {/*    }}*/}
        {/*    renderInput={(params) => <TextField {...params}/>}*/}
        {/*/>*/}
      </SelectorStyle>
  )
}

export default Selector