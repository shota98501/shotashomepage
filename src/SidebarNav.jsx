import React from "react";
import {Sidenav} from "rsuite";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./SidebarNav.css";

const isMobile = window.innerWidth < 600;

function SidebarNav(){
    const links = [
        <a href="#intro">/home</a>,
        <a href="#about">/who am i</a>,
        <a href="#experience">/experience</a>,
        <a href="#projects">/projects</a>,
    ];

    return(
        <div className="sidebar-nav">
            {!isMobile && (
                <Sidenav>
                    <Sidenav.Body>
                        <div className="sidebar-links">
                            {links.map((link, i) =>(
                                <div>{link}</div>
                            ))}
                        </div>
                    </Sidenav.Body>
                </Sidenav>
            )}
        <div className="sidebar-logos" href="/">
            <a href="mailto:ak.st98501@gmail.com">
               <EmailIcon style={{fontSize: 20}}></EmailIcon> 
            </a>
            <a href="https://github.com/shota98501">
               <GitHubIcon style={{fontSize: 20}}></GitHubIcon> 
            </a>
            <a href="https://twitter.com/Sho_taso98501">
               <TwitterIcon style={{fontSize: 20}}></TwitterIcon> 
            </a>
        </div>
        
        </div>
    );
}

export default SidebarNav;