import React from 'react';
import './style.css'

const Textarea = (props) => {
    let data = props.data.questions[0];
    const handleChange = (e) => {
        props.setData((prevState) => ({
            ...prevState,
            [data.name]: e.target.value
        }))
    }
    return (
        <div className="textarea-widget-container">
            <h3 className="widget-header">{data.label}</h3>
            <p className="widget-required-paragraph">{data.required && '*'}</p>
            <textarea onChange={handleChange} rows={8}></textarea>
        </div>
    )
};

export default Textarea