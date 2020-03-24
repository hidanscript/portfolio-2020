import React, { useState } from 'react';
import Placeholder from '../../lib/Placeholders';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './index.css';

export default function Navbar() {

    const [ showContactScreen , setContactScreen ] = useState(false);

    const contactMe = () => {
        setContactScreen(!showContactScreen);
    };

    let contactScreen;

    if(showContactScreen) {
        contactScreen = <div id="contact-screen" className="contact-screen">
                            <div className="contact-card">
                                <i onClick={contactMe} className="fas fa-times"></i>
                                <h2>Contact</h2>
                                <p><b>Email: </b>dmarcano.ml@gmail.com</p>
                                <p><b>Phone: </b>+54 11 7362 6851</p>
                            </div>
                        </div>
    }

    return(
        <nav className="Navbar">
            
            <img src={Placeholder.Logo} alt="placeholder-logo" />

            { contactScreen }

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

            <input className="contact-nav-button" type="button" onClick={contactMe} value="Contact"></input>
        </nav>
    );
}