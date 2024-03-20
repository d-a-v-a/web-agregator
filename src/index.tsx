import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

import {DataProvider} from "./context/DataContext";
import NavState from "./context/navState";
import {FullscreenProvider} from "./context/FullScreen";
import {GlobalStyle} from "./assets/GlobalStyles";




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