import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
const Contacts =(props)=>{
    
    const data=[]
    for(let key in props.data){
        
        data.push(props.data[key])
    }

    const Ref=useRef();

    useEffect(()=>{
       
        if(props.buttonActive!=='Contacts'){
                
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
        <div className={clas} ref={Ref}>
                <div className="mainContainerWraperContacts">
                    <div className="mainContainerWraperLeft">
                        {data.map((elem,index) =>
                            index<4?
                            <div key={index} className='mainItem'>
                                        {/* <div className="mainItemImg"> */}
                                            <img src={elem.img} alt="" />
                                            {/* </div> */}
                                        <div  className="mainItemHeader">
                                            <a href={elem.link}>{elem.name}</a>
                                        </div>
                                        
                            </div>
                            :null
                        )}
                    </div>
                    <div className="mainContainerWraperRight">
                    {data.map((elem,index) =>
                            index>=4?
                            <div key={index} className='mainItem'>
                                        <img src={elem.img} alt="" />
                                        <div  className="mainItemHeader">
                                                <a href={elem.link}>{elem.name}</a>
                                        </div>
                                        
                            </div>
                            
                            :null
                        )}  
                        </div>    
            </div>
            </div>  
    )
}

export default Contacts;