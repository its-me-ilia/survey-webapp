import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { apiBaseurl } from "./env";
import Action from "./components/Action/Action";
import "./App.css";

function App() {
    const surveySchema = useRef({
        pages: [],
    });
    const [activePage, setActivePage] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
        (async () => {
            let { data } = await axios.get(
                `${apiBaseurl}/api/v1/survey/get-schema`
            );
            surveySchema.current = data;
            setActivePage(data.pages[0].id);
        })();
    }, []);
    const submit = async () => {
      try {
        await axios.post(`${apiBaseurl}/api/v1/survey/submit`, {
          data
        });
        setActivePage("thankyou");
      } catch (error) {
        console.log(error.response);
      };
    };
    return (
        <div className="App">
            <div className="survey-widget-wrapper">
                <div className="survey-widget-container">
                    <div className="survey-widget-top">
                        <p>Trustmary & Ilia Dev</p>
                    </div>
                    <div>
                      {activePage === 'thankyou' ? 
                        (
                          <div className="thankyou-widget">
                            {surveySchema.current.thank_you_text}
                          </div>
                        )
                        :
                        (
                          <Action
                          setData={setData}
                          existingData={data}
                          submit={submit}
                          setActivePage={setActivePage}
                          surveySchema={surveySchema.current}
                          activePage={activePage}
                      />
                        )
                      }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
