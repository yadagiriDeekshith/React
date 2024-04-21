import { useState } from "react";
import axios from "axios";



function InsertApi(){
    let [name,setname]=useState("");
    let [age,setage]=useState(0);
    let [gender,setgender]=useState("");

    let insertData=()=>{
        axios.post('http://127.0.0.1.8000/api/',{"name":name,"age":age,"gender":gender}).then((resp)=>{
            console.log(resp)
        }).catch((error)=>{
            console.log(error);
        });
    }
    return(
        <div>
            <form onSubmit={insertData}>
            name: <input type="text" onChange={(event)=>setname(event.target.value)}/><br/>
            age: <input type="text" onChange={(event)=>setage(event.target.value)} /><br/>
            gender: <input type="text" onChange={(event)=>setgender(event.target.value)}/><br/>
            
            <button type="submit">Insert</button>
            </form>
            <hr></hr>
        </div>
    );
}

export default InsertApi;