import {Vars} from './vars';
import {Fonts} from './fonts';
import {Base} from './base';
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`${Vars} ${Fonts} ${Base}`
