


function Third(props){
    return(
        <div>
            <h1>In Third,  {props.name}</h1>
            <input type="text" onChange={(event)=>props.setFun(event.target.value)}/>
            <hr></hr>
        </div>
    );
}

//<button onClick={()=> alert("DEC Clicked Button")}>Click Me</button>

export default Third;