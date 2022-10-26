import React from "react";
import { useEffect } from "react";
import { mainBody } from "../Main";
import { useRef } from "react";

const Education =(props)=>{

    const data=[]
    for(let key in props.data){
        
        data.push(props.data[key])

    }

    const Ref=useRef();

    useEffect(()=>{
        
            
        
        
            if(props.buttonActive!=='Education'){
                
                Ref.current.classList.remove('MainContainer_active');
                Ref.current.classList.add('MainContainer');
                setTimeout(() => {
                    Ref.current.style.display='none';
                }, 500);
                    
            }
            else{
                setTimeout(() => {
                    Ref.current.style.display='flex';
                Ref.current.classList.remove('MainContainer');
                Ref.current.classList.add('MainContainer_active');
                }, 500);
                
            }

    },[props.buttonActive]);

    useEffect(()=>{
    
        Ref.current.style.display='none';
        
    },[]);


    let clas = 'MainContainer_active'

    return(
        
        <div  className={clas} ref={Ref}>
            <div className="mainContainerWraperEducation" >

                {data.map((elem,index) => 
                    <div key={index}  style={{display:'flex', alignItems:'center',marginBottom:'15px'}}>
                        <div className="mainContainerImg">
                                <img src={elem.img}/>
                            </div>

                            <div>
                                <div className="mainConteinerHeader">
                                        {elem.header}
                                </div>
                                <div className="mainConteinerEducationYears">
                                        {elem.years}
                                </div>
                                <div className="mainConteinerText">
                                        {elem.major}
                                </div>
                            </div>
                    </div>
                )}
            </div>
        </div>   
        
    )
    
}

export default Education;