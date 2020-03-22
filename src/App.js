import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Greetings from './Components/Greetings';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import './css/app.css';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Header />
        <Greetings />
        <Skills />
        <Portfolio />
    </div>
  );
}

export default App;
