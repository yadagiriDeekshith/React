


import { useState } from 'react';
import './First.css'
import Second from './Second';


function First(){
    let [username,setusername]=useState('');
    let [show,setshow]=useState(false);
    
    return(
        <div className='firstapp'>
            <input type='text' onChange={(event)=>setusername(event.target.value)}/>
            <button onClick={()=>setshow(true)}>Go to Second</button>
            {show? <Second name={username} setFun={setusername}/>: ""}
            
        </div>
    );
}

/*function SubFirst(props){
    return(
        <div>
            <h4>Name:{props.name}</h4>
            <h4>Age: {props.age}</h4>
            <hr></hr>
        </div>
    );

}


function First(){
    return(
        <div id="firstapp">
            <h1>
                <h1>It is first component</h1>
                <SubFirst name="Raju" age={20}/>
                <SubFirst name="Dec" age={22}/>
                <SubFirst name="Nav" age={23}/>
                <SubFirst name="scam" age={23}/>
            </h1>
        </div>
    );
}*/

export default First;