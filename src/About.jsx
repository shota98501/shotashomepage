import React,{useState}from "react";
import FadeinSection from './FadeinSection';
import './About.css'

function About ()  {
    const [setState] = useState({
        expanded: true,
        activeKey: "1"
    });

    const handleChange =(eventKey) =>{
        setState({
            activeKey: eventKey
        })
    }

    const one = (
        <p>
            I am currently a SoftWare/Network Engineer working in Japan
            and I have a experience of living in America for 8 years
        </p>

    );

    const two =(
        <p>
            Outside of work, Im interseted in making developments by my own.
            I also like to play video games and read books
        </p>
    );

    const desc_items = [one, two];

    const tech_stack =[
        "CCNA",
        "Javascript",
        "React",
        "HTML & CSS",
        "Python",
        "Django",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return(
        <div 
        id="about"
        onChange={handleChange}
        >
        <FadeinSection>
            <div className="section-header">
                <span className="section-title">/ who am i</span>    
            </div>
            <div className="about-content">
                <div className="about-description">
                {[one]}
                {"Here are some technologies and skills I have been working with:"}
                <ul className="tech-stack">
                    {tech_stack.map(function(tech_items, i){
                        return(
                            <FadeinSection delay={'${i + 1}00ms'}>
                                <li>{tech_items}</li>
                            </FadeinSection>
                        );
                    })}
                </ul>
                {[two]}
                </div>
            </div>
        </FadeinSection>
        </div>
    );

    
}

export default About;