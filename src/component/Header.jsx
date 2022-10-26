import React from "react";
import MyButton from "./MyButton/MuButton";
import { useState } from "react";
import myPhoto from '../img/ico/MyPhoto.jpg';

const Header = (props) =>{
    

    
    const setButtonActive=props.setHeaderButtonActive;

    
    const ClickButton =(event)=>{
        
        
        Array.from(document.querySelector('.MyButtonsContainer').children).forEach(function(elem,index){
            elem.classList.remove('nav_ActiveDiv')
            elem.classList.add('navDiv');
            
            
        })

        event.target.classList.toggle('nav_ActiveDiv');
        event.target.classList.toggle('navDiv')
        
        const arrButtons=Array.from(document.querySelector('.MyButtonsContainer').children);
        arrButtons.forEach(function(elem,index){
            
            if(elem.getAttribute('class')==='nav_ActiveDiv'){
                
                
                
                setButtonActive(elem.innerText);
                

            }
        })
        
    }

    return(
        <div className="Header">
            <div className="ForMyPhoto">
                <img src={myPhoto}/>
            </div>
            
            <h2 className="MyName">Artem Mukha</h2>
            <p className="about_me"> Creative and self-starting Front-End Developer.<br /> I create stable websites and apps in a modern IT environment.  </p>
            <nav className="MyButtonsContainer">
                <MyButton name={'About'} clickButton={ClickButton} active={true} />
                <MyButton name={'Education'} clickButton={ClickButton} active='' />
                <MyButton name={'Experience'} clickButton={ClickButton} active='' />
                <MyButton name={'Technology'} clickButton={ClickButton} active='' />
                <MyButton name={'Contacts'} clickButton={ClickButton} active='' />
            </nav>
            <div className="loadResumeContainer">
                <p>More into in my CV</p>
                <a href='../files/Resume.pdf' download={'../files/Resume.pdf'}>En</a>
                <a href='../files/Резюме.pdf' download={'../files/Резюме.pdf'}>Ru</a>
            </div>
        </div>

    )
    


}

export default Header 