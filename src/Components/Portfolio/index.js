import React, { useState, useEffect } from 'react';
import Placeholder from '../../lib/Placeholders';
import WorkCard from './WorkCard';
import {
    Okupa,
    LiveChat
} from './WorkList';
import './index.css';

export default function Portfolio() {

    const [ recentWorks , setRecentWorks ] = useState([]);

    useEffect(() => {

        const workList = [ Okupa , LiveChat ];

        setRecentWorks(workList);


    }, []);

    const renderRecentWorks = work => {
        return <WorkCard title={work.title} desc={work.desc} link={work.link} image={work.image} alt={work.alt} />;
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
            </div>
        </div>
    );
}