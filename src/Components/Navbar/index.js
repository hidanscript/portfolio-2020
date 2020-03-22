import React from 'react';
import Placeholder from '../../lib/Placeholders';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './index.css';

export default function Navbar() {

    return(
        <nav className="Navbar">
            
            <img src={Placeholder.Logo} alt="placeholder-logo" />

            <ul>
                <li>
                    <AnchorLink className="anchor" href="#about">About me</AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor" href="#skills">Skills</AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor" href="#portfolio">Portfolio</AnchorLink>
                </li>
                <li>
                    <a className="anchor" href="https://github.com/hidanscript" target="_blank" rel="noopener noreferrer">GitHub <i class="fab fa-github"></i></a>
                </li>
            </ul>

            <input className="contact-nav-button" type="button" value="Contact"></input>
        </nav>
    );
}