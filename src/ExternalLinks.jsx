import React, {useState} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ExternalLinks (props){
    const [setState] = useState({
        expanded: true,
        activeKey: "1",
    });

    const handleChange = (eventKey) =>
    setState({
        activeKey: eventKey
    });

    return(
        <div
            onChange={handleChange}
        >
        <span className="external-links">
            <a className="github-icon" href={props.githubLink}>
                <GitHubIcon
                 style={{
                    fontSize: 20,
                    color: "red"
                 }}
                 ></GitHubIcon>
            </a>
        </span>
        </div>
    )

    }
    
export default ExternalLinks;
