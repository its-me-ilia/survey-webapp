import React from "react";
import NPS from "../NPS/Nps";
import Textarea from "../Textarea/Textarea";
import NextButton from "../NextButton/NextButton";
import './style.css';

const Action = (props) => {
    return (
        <div>
            <div className="action-container">
                {props.surveySchema.pages.map((val, i) => {
                    let active = props.activePage === val.id;
                    switch (val.questions[0].type) {
                        case "nps":
                            return (
                                <div key={val.id} style={{display: active ? 'initial' : 'none'}}>
                                    <NPS existingData={props.existingData} setData={props.setData} data={val} />
                                    <NextButton data={val} submit={props.submit} existingData={props.existingData} schema={props.surveySchema} index={i} setActivePage={props.setActivePage} />
                                </div>
                            );
                        case "textarea":
                            return (
                                <div key={val.id} style={{display: active ? 'initial' : 'none'}}>
                                    <Textarea existingData={props.existingData} setData={props.setData} data={val} />
                                    <NextButton data={val} submit={props.submit} existingData={props.existingData} schema={props.surveySchema} index={i} setActivePage={props.setActivePage} />
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};

export default Action;
