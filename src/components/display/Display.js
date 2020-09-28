import React from 'react';
import './Display.scss';
import Button from '../button/Button';




const Display = (props) => {

    let score = props.data[1].categories.performance.score;
    score === 1 ? score = 100 : score = score*100;

    const DisplayData = {
        url: props.data[0],
        speedScore: score,
        loadSpeed: props.data[1].audits['bootup-time'].displayValue,
        siteImage: props.data[1].audits["final-screenshot"].details.data,
    }

    console.log(DisplayData)
    
    return (
    <div className="display panel">
        <p>Results for: <a href={`https://` + DisplayData.url} target="_blank" rel="noopener noreferrer">{DisplayData.url}</a></p>
        <p>Score: {DisplayData.speedScore}</p>
        <p>Bootup time: {DisplayData.loadSpeed}</p>
        <img className="display__image" width="300" src={DisplayData.siteImage} alt="Preview Img" />
        <Button text="Save" type="button" className="submit" onClick={DisplayData} />
    </div>
    )
}

const DisplayGoogle = data => {
    return (
        <p>{data}</p>
    )
}

export default Display;