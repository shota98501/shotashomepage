import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FadeinSection from "./FadeinSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props){
    const {children, value, index, ...other} = props;
    

    if(isHorizontal){
        return(
            <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
                {value === index && (
                    <Box sx={{ p:1 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
        }else{
            return(
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel`}
                {...other}
                >
                {value === index &&(
                    <Box sx={{ p:1 }}>
                     <Typography>{children}</Typography>
                    </Box>
                    )}
            </div>
            );
        }
    }

    TabPanel.propTypes={
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired
    };

    function allyProps(index){
        if (isHorizontal){
            return{ 
                id: `full-width-tab-${index}`,
                "aria-controls": `full-width-tabpanel-${index}`
            };
        }else{
            return{
                id: `vertical-tab-${index}`
            };
        }
    }

    


    const JobList= () =>  {
        const [value, setValue] = useState(0);

        const experienceitems ={
            Software: {
                jobTitle: "Django,Javascript,React@",
                duration: "Jan 2023-Present",
                desc:[
                    "Developing and maintaining web applications using Python/Django/JavaScript/React and related technologies",
                    "Writing custom Python code to extend Django applications",
                    "Writing custom JavaScript code to extend React applications",
                    "Debugging and troubleshooting existing code"
                ]
            },
            Network: {
                jobTitle: "CCNA@",
                duration: "March 2022 - Present",
                desc:[
                    "Network engineering",
                    "outing protocols: EIGRP, OSPF, BGP",
                    "Operational support",
                    "SAN networking knowledge",
                    "Unified Communication",
                    "OSI model",
                    "Multicasting knowledge: IPv4 and IPv6",
                    "Cisco ASA Firewalls",
                    "Virtual networking"
                ]
            },
            Language: {
                jobTitle: "English,Japanese@",
                duration: "Aug 1995-Present",
                desc:[
                    "Experince living in America for 8 years",
                    "Get a degree of Bachelor of Laws in Japan",
                    "Read IT documents and books in both language",
                ]
            }
    
    
        };

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    };

    return(
        <div>
            <Box sx={{ display: `flex`}}>

        <Tabs
        orientation={!isHorizontal ? "vertical" : null }
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        >
        {Object.keys(experienceitems).map((key, i) =>(
        <Tab label={isHorizontal ? `0${i}.` :key} {...allyProps(i)} />
        ))}
        </Tabs>
        <Box sx={{flex:1}}>
        {Object.keys(experienceitems).map((key, i) =>(
                <TabPanel value={value} index={i}>
                    <span className="joblist-job-title">
                        {experienceitems[key]["jobTitle"] + " "}
                        </span>
                        <span className="joblist-job-company">{key}</span>
                        <div className="joblist-duration">
                            {experienceitems[key]["duration"]}
                        </div>
                        <ul className="job-description">
                            {experienceitems[key]["desc"].map(function (descItem, i){
                                return(
                                    <FadeinSection delay={`${i + 1}00ms`}>
                                    <li key={i}>{descItem}</li>
                                    </FadeinSection>
                                );
                            })}
                        </ul>
                </TabPanel>
            ))}
            </Box>
        </Box>
    </div>
    );    
};


export default JobList;
