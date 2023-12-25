
export const Base = `

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


