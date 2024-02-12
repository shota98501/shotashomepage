import React from "react";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FadeinSection from './FadeinSection';
import "./Project.css"

function Projects (){
    
    const projects ={
        "TodoProject":{
            title: "todoproject",
            desc:
            "A simple Todo Software to not lose tracks of your works",
            techsack: "Django",
        },
        "SNSProject":{
            title:"snsproject",
            desc:
            "Got inspired from the movie Social Network",
            techstack: "Django",
            
        },
        "HomepageProject":{
            title:"homepageproject",
            desc:
            "The HomePage you're looking at!",
            techstack: "React",
        },
    };

    return(
        <div id="projects">
            <div className="section-header ">
                <span className="section-title">/ software-creations</span>
            </div>
            <div className="project-container">
                <ul className="projects-grid">
                    {Object.keys(projects).map((key, i) =>(
                        <FadeinSection delay={`${i + 1}00ms`}>
                        <li className="projects-card">
                            <div classsName="card-header">
                                <div className="folder-icon">
                                    <FolderOpenIcon
                                    style={{fontSize: 35}}
                                    ></FolderOpenIcon>
                                </div>
                            </div>
                            <div className="card-title">{key}</div>
                            <div className="card-desc">{projects[key]["desc"]}</div>
                            <div className="card-tech">{projects[key]["techstack"]}"</div>
                        </li>
                        </FadeinSection>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;