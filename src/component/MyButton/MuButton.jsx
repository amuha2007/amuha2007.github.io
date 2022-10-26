import React from "react";
import { useState } from "react";

const MyButton = (props) =>{

    
    const [buttonActive, setButtonActive] = useState(props.active);
    
    return(
        
        <div onClick={props.clickButton} className={buttonActive ? 'nav_ActiveDiv' : 'navDiv'}>
                {props.name}
        </div>
    )
}

export default MyButton;