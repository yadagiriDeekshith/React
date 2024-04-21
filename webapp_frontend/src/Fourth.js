



import './Fourth.css'
import { useState } from 'react';



function SubFourth(){
    return(
        <h1>Iam a subcomponent</h1>
    );
}


function Fourth(){
    let [x,setx]=useState(0);
    let inc=()=>{
        setx(x+1);
        
    }
    let dec=()=>{
        setx(x-1);
    }
    let pow=()=>{
        setx(x*x);
    }
    let div=()=>{
        setx(x/x);
    }

    return(
        <div className='fourthapp'>
            <h1>{x}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={pow}>*</button>
            <button onClick={div}>/</button>
            <hr></hr>
        </div>
    );
}

export default Fourth;
