import React from 'react';
import './index.css';

export default function WorkCard(props) {

    const openLink = () => {
        window.open( props.link , "_blank");
    }

    return(
        <div className="work-card">
            <img src={props.image} alt={props.alt} />

            <div className="workcard-content">
                <h2>{ props.title }</h2>
                <p>{ props.desc }</p>
                <input type="button" value="Source Code" onClick={() => openLink()}/>
            </div>
        </div>
    );
}