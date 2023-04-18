import React from 'react';
import './App.css';
import FirstPage from "./pages/FirsPage/FirstPage";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPage/>
      <Footer/>
    </div>
  );
}

export default App;
