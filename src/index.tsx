import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";
import {DataProvider} from "./context/DataContext";
import NavState from "./context/navState";
import {FullscreenProvider} from "./context/FullScreen";
import {Provider} from "react-redux";

const GlobalStyle = createGlobalStyle`

  :root {
    --main-bg-color: #1C1E22;
    --dark-grey-color: #2D2D2D;
    --white-color: #FFFFFF;
    --light-grey-color: #99A2AD;
    --rgba-white-color: rgba(255, 255, 255, 0.8);
    --rgba-grey-color: rgba(200, 200, 200, 0.1);
    --grey-title: #B6B6B6;
    --btn-color-normal: rgba(189, 255, 235, 0.94);
    --btn-color-hover: #E7FFF8;
    --btn-color-disabled: rgba(232, 232, 232, 0.94);
    --black-bg: #282828;
    --grey-rgba-color: rgba(193, 217, 226, 0.65);
    --statistics-color: rgba(234, 240, 255, 0.73);
    --black-rgba: rgba(0, 0, 0, 0.5);
    --blue-bg: #5A9DF5;
    --paragraph-color: rgba(255, 255, 255, 0.65);
    --blue-light-bg: #50BDE8;
    --blue-dark-bg: #177DDC;
    --step-grey: #3C3C3C;
    --title-blue-grey: #D0E6EE;
    --gold-bg: #F6B535;
    --name-title: #C1D9E2;
    --blue-color: #93AED6;
    --green-color: #92C9A8;
    --orange-color: #BDB19E;
    --purple-color: #D2A6DD;
    --input-title: rgba(193, 217, 226, 0.65);
    --contacts-color: rgba(208, 230, 238, 0.94);
    --red-color: #FF8197;
    --required-color: #5B5B5B;
    --disabled-submit-bg: #37383A;
    --disabled-submit-color: #656567;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  /* greek-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }

  /* greek */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }

  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }

  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  * {
    margin: 0;
    padding: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
    -webkit-text-size-adjust: 100%;
    color: var(--white-color);
  }


  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  h2 {
    margin-bottom: 25px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: var(--white-color);
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  b, strong {
    font-weight: bolder;
  }

  code, kbd, samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button, [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"], [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--white-color);
    text-decoration: none;
  }

  /* global styles */

  .container-big {
    margin: 0 auto;
    max-width: 1252px;
    padding: 0 14px;
  }

  .container-middle {
    margin: 0 auto;
    max-width: 1144px;
    padding: 0 14px;
  }

  .container-small {
    margin: 0 auto;
    max-width: 954px;
    padding: 0 14px;
  }


  img {
    display: block;
  }

  a, button {
    display: block;
    background: transparent;
    cursor: pointer;
    outline: none;
    border: none;
  }

  input {
    background: transparent;
    border: none;
    outline: none;
  }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <DataProvider>
                <NavState>
                    <GlobalStyle/>
                    <FullscreenProvider>
                        <App/>
                    </FullscreenProvider>
                </NavState>
            </DataProvider>
        </BrowserRouter>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();