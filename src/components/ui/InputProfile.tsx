import React, {useState} from "react";
import {Block, Counter, WrapperNameInput} from "./InputAndTextarea";
import styled from "styled-components";
import passwordImg from "../../assets/images/icons/eyes/notEye.svg"


interface Props {
  placeholder?: string,
  maxLength?: number,
  counter?: boolean,
  jackdaw?: boolean,
  password?: boolean,
  iconSize?: number,
  cleaner?: boolean,
  isInvalid?: boolean,
  reg?: any,
}


function NameProjectInput({
                            placeholder = '',
                            maxLength = 50,
                            counter = false,
                            jackdaw = false,
                            password = false,
                            iconSize = 24,
                            cleaner = false,
                            isInvalid = false,
                            reg,
                          }: Props) {

  const [inputValue, setInputValue] = useState('');
  const [validUrl, setValidUrl] = useState(false)

  const validURLFunc = (strUrl: string) => {
    let urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i');

    if (urlPattern.test(strUrl)) {
      setValidUrl(true)
    } else {
      setValidUrl(false)
    }
  }
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value)
    validURLFunc(event.target.value.toString())
  };
  const type: 'password' | 'text' = password ? 'password' : 'text'

  function cleanInput() {
    setInputValue('')
    setValidUrl(false)
  }

  return (
      <Block>
        <WrapperNameInput isInvalid={isInvalid}>
          <NameInputStyle type={type} {...reg} maxLength={maxLength} value={inputValue}
                          onChange={handleInputChange}
                          placeholder={placeholder}/>

          {jackdaw ? (
              <JackdawStyled validUrl={validUrl} width="18" height="14" viewBox="0 0 18 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.7364 1.16399C18.0878 1.51547 18.0878 2.08531 17.7364 2.43679L6.6364 13.5368C6.46761 13.7056 6.2387 13.8004 6 13.8004C5.76131 13.8004 5.53239 13.7056 5.3636 13.5368L0.263604 8.43679C-0.0878682 8.08531 -0.0878678 7.51547 0.263604 7.16399C0.615076 6.81252 1.18492 6.81252 1.5364 7.16399L6 11.6276L16.4636 1.16399C16.8151 0.812523 17.3849 0.812523 17.7364 1.16399Z"
                    fill="#585858"/>
              </JackdawStyled>
          ) : (<></>)}
          {password ? (<Icon size={iconSize} img={passwordImg}/>) : (<></>)}
        </WrapperNameInput>
        {counter ? (<Counter>{inputValue.length}/{maxLength}</Counter>) : (<></>)}
        {cleaner ? (<CleanEl onClick={cleanInput}>Очистить поле</CleanEl>) : (<></>)}
      </Block>
  )
}


const CleanEl = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;

  color: rgba(208, 230, 238, 0.94);
  cursor: pointer;
`

interface IconProps {
  size: number,
  img: any,
}

const JackdawStyled = styled.svg<{ validUrl?: boolean }>`
  path {
    transition: fill 0.3s ease-in-out;
    fill: ${props => props.validUrl ? 'green' : '#585858'};
  }
`

const Icon = styled.div<IconProps>`
  width: ${props => props.size.toString() + 'px'};
  height: ${props => props.size.toString() + 'px'};
  background-image: url("${props => props.img}");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
`

const NameInputStyle = styled.input`
  padding-left: 2.2rem;
  width: 100%;
  height: 3.9rem;
  background: rgba(200, 200, 200, 0.1);
  border-radius: 4px;
  border: 1px solid transparent;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.9rem;
  transition: border-color 0.3s ease-in-out;

  color: rgba(255, 255, 255, 0.65);

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: var(--name-title);
  }

  &:focus {
    border-color: var(--name-title);
  }

  &::placeholder {
    color: var(--paragraph-color);
  }

  &:disabled {
    background: transparent;

    &:hover {
      border-color: transparent;
    }

    &:focus {
      border-color: transparent;
    }
`

export default NameProjectInput