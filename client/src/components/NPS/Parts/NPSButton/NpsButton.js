import React from 'react';
import './style.css';

const NpsButton = (props) => {
    const handleChange = () => {
        props.setData((prevState) => ({
            ...prevState,
            [props.data.name]: props.value
        }))
    }
    let type = ""
    if(props.selectedNps < props.value){
        type="nps-btn-over"
    }else if(props.selectedNps === props.value){
        type="nps-btn-selected"
    }else{
        type="nps-btn-normal"
    }
    return (
        <div onClick={handleChange} className={`nps-button ${type}`}>
            {props.value}
        </div>
    );
};

export default NpsButton;