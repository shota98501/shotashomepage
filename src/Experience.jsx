import React, { useState } from "react";
import JobList from "./JobList";
import FadeinSection from "./FadeinSection";
import "./Experience.css";

function Experience ()  {
    const [setState] = useState({
        expanded: true,
        activeKey: "1"
    });

    const handleChange =(eventKey) =>{
        setState({
            activeKey: eventKey
        })
    }

return(
    <div 
    id="experience"
    onChange={handleChange}
    >
        <FadeinSection>
        <div className="section-header">
            <span className="section-title"> / experience</span>
        </div>
        <JobList></JobList>
        </FadeinSection>
    </div>
);

}

export default Experience;