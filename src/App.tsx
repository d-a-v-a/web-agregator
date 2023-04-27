import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
