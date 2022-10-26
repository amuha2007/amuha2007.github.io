import React, { createRef, useEffect, useState } from "react";
import { mainBody } from "./Main";
import BirthDatePict from "../img/ico/birthDay.png";
import LanguagesPict from '../img/ico/LanguagesBlue.png';
import ResourcefulPict from '../img/ico/idea.png';
import HobbyPict from '../img/ico/hobby.png';
import Mic from '../img/ico/mic.png';

let imgs=[BirthDatePict,LanguagesPict,ResourcefulPict,HobbyPict,Mic]

const Middleicons=(props)=>{
    
    const data=mainBody[props.buttonActive];

    
    


    
    return(
        <div className="iconsImgsContainer">
            <div className="forImg">
                <img src={imgs[0]}></img>
            </div>
            <div className="forImg">
                <img src={imgs[1]}></img>
            </div>
            <div className="forImg">
                <img src={imgs[2]}></img>
            </div>
            <div className="forImg">
                <img src={imgs[3]}></img>
            </div>
            <div className="forImg">
                <img src={imgs[4]}></img>
            </div>
        </div>
            
            
        
       
        
        
    )
}

export default Middleicons;