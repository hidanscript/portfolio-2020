import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function WorkCard(props) {

    const openLink = link => {
        window.open( link , "_blank");
    }

    const getButtonType = () => {
        if(props.btnType === "multiple") {
            return(
                <div className="btn-container">
                    <Link to={props.link}>
                        <input className="btn-workcard" type="button" value="View Online"/>
                    </Link>
                    <input className="btn-workcard" type="button" value="Source Code" onClick={() => openLink(props.link2)}/>
                </div>
            );
        } else {
            return(
                <input className="btn-workcard" type="button" value="Source Code" onClick={() => openLink(props.link2)}/>
            );
        }
    }

    return(
        <div className="work-card">
            <img src={props.image} alt={props.alt} />

            <div className="workcard-content">
                <h2>{ props.title }</h2>
                <p>{ props.desc }</p>
                { getButtonType() }
            </div>
        </div>
    );
}