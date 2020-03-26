import React, { useState, useEffect } from 'react';
import Placeholder from '../../lib/Placeholders';
import WorkCard from './WorkCard';
import {
    Okupa,
    LiveChat,
    PythonDB
} from './WorkList';
import './index.css';

export default function Portfolio() {

    const [ recentWorks , setRecentWorks ] = useState([]);

    useEffect(() => {

        const workList = [ Okupa , LiveChat, PythonDB ];

        setRecentWorks(workList);


    }, []);

    const goToGithub = () => {
        window.open("https://github.com/hidanscript", "_blank");
    };

    const renderRecentWorks = work => {
        return <WorkCard title={work.title} desc={work.desc} link={work.link} link2={work.link2} btnType={work.btnType} image={work.image} alt={work.alt} />;
    }

    const recentWorksList = recentWorks.map(renderRecentWorks);

    return(
        <div id="portfolio" className="portfolio">
            <img className="waves" src={Placeholder.Waves} alt="waves" />

            <div className="portfolio-board">
                <h2 id="port-title">My Recent Work</h2>

                <div className="works-list">
                    { recentWorksList }
                </div>

                <input className="github-ref-button" type="button" onClick={() => goToGithub()} value="See all my works on GitHub!"/>
            </div>

        </div>
    );
}