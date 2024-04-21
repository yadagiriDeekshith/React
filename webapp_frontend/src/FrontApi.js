import { useEffect ,useState} from "react";
import axios from "axios";
import './FrontApi.css';




function FrontApi(){
    let [data,setdata]=useState([]);
    let [pno,setpno]=useState(1);
    let perPage=5;
    useEffect=(()=>{
        axios.get('http://127.0.0.1:8000/Api/').then((resp)=>{
            //console.log(resp.data);
            setdata(resp.data);
        }).catch((error)=>console.log(error));
    },[]);
    return(
        <div className="frontapi">
            <h1>We are printing Data here</h1>
            <table>
                {data.slice(pno*perPage-perPage,pno*perPage).map((obj)=>{
                    return <tr><td>{obj.name}</td><td>{obj.age}</td><td>{obj.gender}</td></tr>
                })};
            </table>
            <button onClick={()=>setpno(pno-1)}>Previous</button>
            {pno}
            <button onClick={()=>setpno(pno+1)}>Next</button>
            <hr></hr>
        </div>
    );
}

export default FrontApi;