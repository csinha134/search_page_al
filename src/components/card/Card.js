import React from 'react';
import './Card.css';
import ProgressBar from '../progressbar/ProgressBar';

function Card({ title, count, growth, data, blue }) {

    return (
        <div className={"card " + (blue && "blue")}>
            <div className="left">
                <h3>{title}</h3>
                <div className="stat">
                </div>
            </div>
            <div className="right">
                <ProgressBar data={data} blue={blue}/>
            </div>

        </div>
    )
}

export default Card

