import React from 'react';
import Placeholder from '../../lib/Placeholders';
import './index.css';

export default function Header() {

    return(
        <header>
            <img className="waves" src={Placeholder.Waves} alt="waves" />

            <div className="header-slogan">
                <h1>Fullstack Software Developer</h1>
                <h2>Javascript <b>flavors</b>, reusable components, and never stop learning!</h2>
                
               
            </div> 
        </header>
    );
}