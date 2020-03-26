import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Greetings from '../Components/Greetings';
import Skills from '../Components/Skills';
import Portfolio from '../Components/Portfolio';

function Landing() {
    return(
        <div className="App">
            <Navbar />
            <Header />
            <Greetings />
            <Skills />
            <Portfolio />
        </div>
    );
}

export default Landing;