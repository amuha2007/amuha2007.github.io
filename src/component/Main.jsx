import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import About from "./About/About";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Technology from "./Technology/Technology";
import Contacts from "./Contacts/Contacts";
import BirthDatePict from "../img/ico/birthDay.png";
import LanguagesPict from '../img/ico/LanguagesBlue.png';
import ResourcefulPict from '../img/ico/idea.png';
import HobbyPict from '../img/ico/hobby.png';
import Mic from '../img/ico/mic.png';
import middleIcons from '../component/middleIcons';
import { createRef } from "react";
import icoFaceBook from '../img/ico/social network/facebook.png';
import icoGitHub from '../img/ico/technology/gitHub2.png';
import icoInstagram from '../img/ico/social network/Instagramm.png';
import icoLinkedin from '../img/ico/social network/LinkIdn.png';
import icoGmail from '../img/ico/social network/gmail.png';
import icoWhatsUp from '../img/ico/social network/whatsUp.png';
import icoTelegram from '../img/ico/social network/telegram.png';
import icoPhone from '../img/ico//social network/phone.png';
import done from '../img/ico/done.png';
import doneAll from '../img/ico/done_all.png';
import icoAgile from '../img/ico/technology/agile.png';
import icoTesting from '../img/ico/technology/Unittesting.png';
import icoDocer from '../img/ico/technology/docker.png';
import icoReact from '../img/ico/technology/React.png';
import icoJs from '../img/ico/technology/JS.png';
import icoApi from '../img/ico/technology/API.png';
import icoCss from '../img/ico/technology/css.png';
import icoHTML from '../img/ico/technology/tegHtml.png';
import icoUpWork from '../img/ico/upwork.png';
import icoMyItScool from '../img/ico/MyItScool.png';
import stickProIco from '../img/ico/stickProIco.png';
import skilboxIco from '../img/ico/skillBox.png';
import { Transition, TransitionGroup,CSSTransition } from "react-transition-group";
import {useSpring , animated, Spring} from 'react-spring';
export {mainBody}




const mainBody={
    About:{
        BirthDate:{ 
            header:'Birth Date',
            body:'20 july 1993',
            img: BirthDatePict
        },
        Languages:{
            header:'Languages',
            body:['English - B1','Russian - Native Speaker'],
            img:LanguagesPict
        },
        Resourceful:{
            header:'Resourceful',
            body:['I easily manage to find the best way out of a difficult situation in a short period of time.'],
            img:ResourcefulPict
        },
        Hobby:{
            header:'Hobby',
            body:['I prefer a healthy lifestyle: traveling, biking, running, etc.','Learning Web Design','In my spare time I read books, do self-development and study foreign languages with a tutor.'],
            img:HobbyPict
        },
        Experience:{
            body:['I have experience in public speaking.'],
            img:Mic
        }
    },
    Education:{
        first:{
            header:'Belarusian civil energy college',
            years:'2016 - 2021',
            major:'Specialty of the university: "industrial and civil construction"',
            img:doneAll
        },
        second:{
            header:'MyItScool',
            years:'2020-2021',
            major:'Major in courses: "Frontend Developer"',
            img:icoMyItScool
        },
        third:{
            header:'MyItScool',
            years:'2020-2021',
            major:'IT English courses',
            img:icoMyItScool
        },
        fourth:{
            header:'Skillbox',
            years:'2021-2022',
            major:['React.js','TypeScript'],
            img:skilboxIco
        }
    },
    Experience:{
        first:{
                header:'Digital agency',
                url:{name:'Stik.pro',link:''},
                years:'09.2021 — 03.2022',
                major:'Development of online stores and D2C sites. Developed a service for launching projects with a machine-learning-based time-tracking system.',
                img:stickProIco
            },
        second:{
                header:'Private practice at',
                url:{name:' Upwork',link:'https://www.upwork.com/'},
                years:'05.2021 — 09.2021',
                major:'Development of Web applications, Web interfaces in accordance with customer requirements.',
                img:icoUpWork
        },
        third:{
                header:'Internship at',
                url:{name:'MyItScool',link:'https://myitschool.by/'},
                years:'02.2021 — 05.2021',
                major:'Development of components and pages for new products. Setting up integration with external and internal services. Working with actual technology on practical tasks.',
                img:icoMyItScool
        } 
    },
    Technology:[
        {head:'HTML',body:[''],img:icoHTML},
        {head:'CSS',body:['Scss | Sass'],img:icoCss},
        {head:'JavaScript',
            img:icoJs,
            body:[
            'TypeScript','https://www.typescriptlang.org/'
        ]},
        
        {head:'React',
            img:icoReact,
            body:[
                ['NEXT.js','https://nextjs.org/'],
                ['Redux','https://redux.js.org/'],
                ['material-UI','https://mui.com/']
                ]
        },
        {head:'Unit Testing',body:[''],img:icoTesting},
        {head:'RESTful API',body:['Axios','https://axios-http.com/'],img:icoApi},
        {head:'Agile',body:[['Scrum'],['Kanban'],['Waterfall']],img:icoAgile},
        {head:'Docer',body:[['Docer',' makes development efficient and predictable','https://www.docker.com/']],img:icoDocer}
        
    ],
    Contacts:[
        {name:'FaceBook',img:icoFaceBook,link:'https://www.facebook.com/GreenGoo93/'},
        {name:'GitHub',img:icoGitHub,link:''},
        {name:'Instagram',img:icoInstagram,link:'https://www.instagram.com/artem__muha/'},
        {name:'Linkedin',img:icoLinkedin,link:'https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D0%B5%D0%BC-%D0%BC%D1%83%D1%85%D0%B0-4029ab209/'},
        {name:'amuha2007@gmail.com',img:icoGmail,link:'https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin'},
        {name:'WhatsApp',img:icoWhatsUp,link:'https://web.whatsapp.com/'},
        {name:'Telegram',img:icoTelegram,link:'https://t.me/artem_mukha'},
        {name:'+375447503678',img:icoPhone,link:'tel:+375447503678'},
    ]
};



const Main = (props) => {

    let buttonActive='About';

    const mainRef = useRef();
    
    
    buttonActive=props.buttonActive;

    

const [mainVisible,setMainVisible]=useState(true);



useEffect(()=>{
    
    
    mainRef.current.style.opacity='0';
    

    return () =>{
        
        setTimeout(() => {
            setMainVisible(true)
            
            mainRef.current.style.opacity='1';
        }, 1000);
    };
},[buttonActive]); //только при изменении buttonActive;

useEffect(()=>{
    mainRef.current.style.opacity=1;
},[])

    return (
        
        mainVisible?
            
                    <div className={`Main`} ref={mainRef}>
                        
                                
                        
                            <About data={(mainBody.About)} buttonActive={(buttonActive)}/>
                            <Education data={(mainBody.Education)} buttonActive={(buttonActive)} />
                            <Experience data={(mainBody.Experience)} buttonActive={(buttonActive)} />
                            <Technology data={(mainBody.Technology)} buttonActive={(buttonActive)} />
                            <Contacts data={(mainBody.Contacts)} buttonActive={(buttonActive)} />
                    </div>
            
        :null
        
    )
}

export default Main;
