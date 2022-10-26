import React from "react";
import { useRef, createRef, useEffect} from "react";






const Technology =(props)=>{
    
    const Ref=useRef();
    
    

    useEffect(()=>{
        
        if(props.buttonActive!=='Technology'){
                
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
    
    const data=[]
    for(let key in props.data){
        
        data.push(props.data[key])
    }

let clas = 'MainContainer_active'

    return(
        <div className={clas} ref={Ref}>
            <div className="mainContainerWraperTechnology" >
                <div className="mainContainerWraperLeft">
                
            
                    {data.map((elem,index) => 
                    //делим контент на 2 части поровну
                    index<data.length/2?

                        elem.head!=='Docer'?
                            
                            <div key={index} className='mainItem' style={{display:'flex', }}>
                                    <div className="MainItemTechnologyForImg">
                                        <img src={elem.img} />
                                    </div>
                                    <div>
                                        <div className="mainConteinerHeader">
                                                {elem.head}
                                        </div>
                                        <div className="mainConteinerText" style={{display:'flex', flexDirection:'row'}}>
                                            
                                                    
                                                    {
                                                    elem.body.length<3
                                                    ?
                                                    <a href={elem.body[1]}>{elem.body[0]}</a>
                                                    :elem.body.map((el,index)=><div key={index} className="mainConteinerTextDiv"> 
                                                        <a href={el[1]} >{`${el[0]}`}</a>
                                                    </div>)
                                                    }
                                            
                                            
                                        </div>
                                    </div>
                            </div>
                            :
                            <div key={index} className='mainItem' style={{display:'flex', flexDirection:'column'}}>
                                <div className="mainContainerForImg">
                                    <img src={elem.img} alt="" />
                                </div>
                                <div>
                                        <div className="mainConteinerHeader">
                                                {elem.head}
                                        </div>
                                        <div className="mainConteinerText DocerText" style={{display:'flex', flexDirection:'row'}}>
                                            <a href={elem.body[0][2]}>{elem.body[0][0]}</a>
                                            <p style={{color:'black', marginLeft:'7px'}}>{elem.body[0][1]}</p>
                                            
                                        </div>
                            </div>
                            </div>
                            :null
                        )}
                        </div>
                        <div className="mainContainerWraperRight">
                        {data.map((elem,index) => 
                    //делим контент на 2 части поровну
                    index>=data.length/2?

                        elem.head!=='Docer'?
                            
                        <div key={index} className='mainItem' style={{display:'flex', }}>
                        <div className="MainItemTechnologyForImg">
                            <img src={elem.img} />
                        </div>
                        <div>
                            <div className="mainConteinerHeader">
                                    {elem.head}
                            </div>
                            <div className="mainConteinerText" style={{display:'flex', flexDirection:'row'}}>
                                
                                        
                                        {
                                        elem.body.length<3
                                        ?
                                        <a href={elem.body[1]}>{elem.body[0]}</a>
                                        :elem.body.map((el,index)=><div key={index} className="mainConteinerTextDiv"> 
                                            <a href={el[1]} >{`${el[0]}`}</a>
                                        </div>)
                                        }
                                
                                
                            </div>
                        </div>
                </div>
                :
                <div key={index} className='mainItem' style={{display:'flex'}}>
                    <div className="MainItemTechnologyForImg">
                        <img src={elem.img} alt="" />
                    </div>
                    <div>
                            <div className="mainConteinerHeader">
                                    {elem.head}
                            </div>
                            <div className="mainConteinerText DocerText" style={{display:'flex', flexDirection:'row'}}>
                                <a href={elem.body[0][2]}>{elem.body[0][0]}</a>
                                <p style={{color:'black', marginLeft:'7px',width:'210px'}}>{elem.body[0][1]}</p>
                                
                            </div>
                </div>
                </div>
                            :null
                        )}
                        </div>
            </div>
        </div> 
    )
}

export default Technology;