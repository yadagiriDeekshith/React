


import './LifeCycle.css';
import { useState , useEffect} from 'react';

function Display(){
    return(
        <h1>We are learning ReactJs</h1>
    );
}

function Lifecycle(){
    let [show,setshow]=useState(false);
    let changeShow=()=>{
        if(show==true){
            setshow(false);
        }else{
            setshow(true);
        }
    }
    useEffect(()=>{
        console.log("Use effect is called");
    },[show]);

    return(
        <div className="lifecycleapp">
            <button onClick={changeShow}>Show/Hide</button>
            {show? <Display/> : ""}
            <hr></hr>
        </div>
    );
}



export default Lifecycle;