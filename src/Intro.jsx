import React, { useState } from "react";
import TypeWriter from './TypeWriter';
import EmailIcon from '@mui/icons-material/Email';
import FadeinSection from './FadeinSection';
import "./Intro.css";



function Intro ()  {
  const [setState] = useState({
    expanded: true,
    activeKey: "1",
    visible:true
});

const handleChange =(eventKey) =>{
    setState({
        activeKey: eventKey
    })
}

        return (
        <div 
        id="intro"
        onChange={handleChange}
        >
            <div className="Type">
            <h1>
            <TypeWriter text="Shota, Login" delay={100} />
            </h1>
            </div>
            <FadeinSection>
            <div className="intro-title">I often create stuff</div>
            <div className="intro-subtitle">
              I`m a Network/Software Engineer based in Tokyo
              i`m interested in full-stack development,machine learning,
              game development and everything in between!
            </div>
            <div className="intro-contact">
            <a 
            href="mailto:ak.st98501@gmail.com">
            <EmailIcon></EmailIcon>
            {"Text me"}
            </a>
            </div>
            </FadeinSection>
        </div>
    )

}

export default Intro;
