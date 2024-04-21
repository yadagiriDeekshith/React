import { useState } from "react";
import Third from "./Third";

function Second(props){
    let [show,setshow]=useState(false);
    return(
        <div>
            <h1> in second This is {props.name}</h1>
            <button onClick={()=>setshow(true)}>Goto Third</button>
            {show? <Third name={props.name} setFun={props.setFun}/>:""}
            <hr></hr>
        </div>
    );
}

//<h1>Hi {show? props.name: 'Someone unknown'}</h1>

export default Second;