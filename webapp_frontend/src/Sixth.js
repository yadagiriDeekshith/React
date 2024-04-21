





function Sixth(){
    let x=["Rama","Sita","Hanuma","Saraswathi"];
    return(
        <div>
            {x.map((item)=>{
                return <h1>{item}</h1>

            })}
            <hr></hr>
        </div>
    );
}

export default Sixth;

