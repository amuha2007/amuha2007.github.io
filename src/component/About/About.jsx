import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useSpring, amiated} from 'react-spring'; 
import { useRef } from "react";
import { mainBody } from "../Main";
import userEvent from "@testing-library/user-event";
import cl from './About.module.css';


const About =(props)=>{
    
    
    const data=[]
    for(let key in props.data){
        
        data.push(props.data[key])
    }
    
    const Ref=useRef();

    useEffect(()=>{
        
        
        
        //Ref.current.classList.add('MainContainer_active')
        if(props.buttonActive!=='About'){
            
            Ref.current.classList.remove('MainContainer_active');
            Ref.current.classList.add('MainContainer');
            
            setTimeout(() => {
                Ref.current.style.display='none';
                
            }, 500);
            
                
        }else{
            setTimeout(() => {
                Ref.current.style.display='flex';
                Ref.current.classList.remove('MainContainer');
                Ref.current.classList.add('MainContainer_active');
            }, 500);
        }
        
        
        
    },[props.buttonActive]);

    useEffect(()=>{
            Ref.current.classList.add('MainContainer_active')

    },[]);

    
    

    return(
        
        <div className={'MainContainer'} ref={Ref}>
                <div className="mainContainerWraperAbout" >
        {data.map((elem,index) => 
                <div key={index} className='mainItemAbout' style={{display:'flex', alignItems:'center'}}>
                            <div className="mainContainerImg">
                                <img src={elem.img}/>
                            </div>
                            <div>
                                <div className="mainConteinerHeader">
                                        {elem.header}
                                </div>
                                <div className="mainConteinerText">
                                            {elem.body+' '}
                                    </div>
                            </div>
                </div>
                
            )}
            </div>
            </div>  
        
    )
}

export default About;