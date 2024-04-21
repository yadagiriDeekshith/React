

import './Fifth.css'
import { useState } from 'react';


function Fifth(){
    let [data,setdata]=useState("");
    let readData=(event)=>{
        setdata(event.target.value);
    }

    return(
        <div className='fifthapp'>
            <input type='text' onChange={readData}></input>
            <h1>{data}</h1>
            <hr></hr>
        </div>
    );
}


export default Fifth;