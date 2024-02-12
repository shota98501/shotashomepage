import React from "react";
import Intro from './Intro';
import About from './About';
import Experience from './Experience'
import Project from './Project';
import SidebarNav from "./SidebarNav";
import "./App.css";



function App(){
    return(
        <div className="App">
            <div id="content">
            <Intro></Intro>
            <About></About>
            <Experience></Experience>
            <Project></Project>
            </div>
            <SidebarNav />
        </div>
    )
};

export default App;