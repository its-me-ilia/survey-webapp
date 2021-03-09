import React from 'react';
import NPSButton from './Parts/NPSButton/NpsButton';
import './style.css'

const Nps = (props) => {
    let data = props.data.questions[0];
    let selectedNps = props.existingData[data.name];
    return (
        <div className="nps-widget-container">
            <h3 className="widget-header">{data.label}</h3>
            <p className="widget-required-paragraph">{data.required && '*'}</p>
            <div className="nps-button-container">
                {Array.from(new Array(data.range_max + 1)).map((val,i) => {
                    return <NPSButton data={data} selectedNps={selectedNps} setData={props.setData} key={data.range_min + i} value={data.range_min + i} />
                })}
            </div>
        </div>
    );
};

export default Nps;
