import React from 'react';
import './index.css';

export default function SkillCard(props) {

    return(
        <div className="skill-card">
            <img src={props.image} alt={props.alt} />

            <div className="skill-content">
                <div className="skill-title">
                    <h3>{props.title}</h3>
                </div>
                <h4>{props.rank} / 5.0</h4>
            </div>
        </div>
    );
}