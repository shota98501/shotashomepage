import React,{useState} from "react";
import FolderOpen from "@mui/icons-material/FolderOpen";
import FadeInSection from "./FadeinSection";
import ExternalLinks from './ExternalLinks'
import './Hobby.css'
import Projects from "./Project";


function Hobby (){
    const [setState] = useState({
        expanded: true,
        activeKey: "1"
    });

    const handleChange = (eventKey) =>
        setState({
            activeKey: eventKey
        })


    const hobbys = {
        "Gaming":{
            title:"gaming",
            desc:
            "Like to play shootinggames and open world games",
            link: ""
        },
        "Reading":{
            title:"reading",
            desc:
            "Like to read fantasy and mystery",
            link:""
        }
    };

    return(
        <div
        onchange={handleChange}
        >
        <div id="projects">
            <div className="section-header">
                <span className="section-title">/ Hobbys</span>
            </div>
            <div className="project-container">
                <ul className="projects-grid">
                    {Object.keys(projects).map((key, i) =>(
                        <FadeinSection delay={`${i + 1}00ms`}>
                            <li className="projects-card">
                                <div className="card-header">
                                    <div className="folder-icon">
                                        <FolderOpenIcon
                                        style={{fontSize: 35}}
                                        ></FolderOpenIcon>
                                    </div>
                                </div>
                            </li>
                        </FadeinSection>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    )

    


}