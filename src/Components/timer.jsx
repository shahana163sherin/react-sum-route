import {useState,useEffect} from "react"
const Counter = () =>{
    const [running,setRunning]=useState(false)
    const[count,setCount]=useState(0)
    useEffect(()=>{
        let interval
        if(running){
            interval = setInterval(()=>{
                setCount((prev)=>prev+1)
            },1000)
        }
            return ()=>{
                clearInterval(interval)
            }
            
        
},[running])
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setRunning(true)}>Start</button>
            <button onClick={()=>{setRunning(false)
            setCount(0)}}>Reset</button>
            <button onClick={()=>setRunning(false)}>Stop</button>
            
        </div>
    );
    
}
export default Counter