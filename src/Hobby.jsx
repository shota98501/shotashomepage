import React,{useState} from "react";
import FadeInSection from "./FadeinSection";
import './Hobby.css'

function Hobby (){
    const [setState] = useState({
        expanded: true,
        activeKey: "1"
    });

    const handleChange = (eventKey) =>{
        setState({
            activeKey: eventKey
        })
    }

    const one = (
        <p>
            Outside of work and studying, I like to engage to hobbies
        </p>
    );

    const desc_item = [one]

    const hobby_stack = [
        "Gaming",
        "Reading",
        "Training",
        "Travel",
    ];

    const hobby_items = tech_stack.map(stack => <li>{stack}</li>);

    
}
