import React from 'react';
import './App.css';
import FirstPage from "./pages/FirsPage/FirstPage";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPage></FirstPage>
    </div>
  );
}

export default App;
