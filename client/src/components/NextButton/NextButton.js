import React from "react";
import './style.css'

const NextButton = (props) => {
    const handleChange = () => {
        let value = props.existingData[props.data.questions[0].name];
        if(!value){
            return;
        }
        let nextIndex = props.index + 1;
        let getNext = (index) => {
            let page = props.schema.pages[index];
            if(page){
                if(page.conditions){
                    let pass = false;
                    for(let condition of page.conditions){
                        let existingValue = props.existingData[condition.question];
                        switch(condition.test){
                            case 'greaterthan':
                                if(condition.value < existingValue){
                                    pass = true;
                                }
                            break;
                            case 'lessthan':
                                if(condition.value > existingValue){
                                    pass = true;
                                }
                            break;
                            case 'equal':
                                if(condition.value === props.existingData[condition.question]){
                                    pass = true;
                                }
                            break;
                            default: pass = false;
                        }
                    }
                    if(pass){
                        props.setActivePage(page.id);
                    }else{
                        let newIndex = nextIndex + 1;
                        getNext(newIndex);
                    };
                }else{
                    props.setActivePage(page.id);
                }
            }else{
                props.submit()
            };
        }
        getNext(nextIndex);
    };
    return (
        <div className="survey-widget-continue-container">
            <div className="survey-widget-continue">
                <div onClick={handleChange} className="survey-widget-continue-button">Next</div>
            </div>
        </div>
    );
};

export default NextButton;