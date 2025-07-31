import {useState,useEffect,useRef} from "react"
const Counter = () =>{
    const [running,setRunning]=useState(false)
    const[count,setCount]=useState(0)
    const  inputref=useRef("")
    useEffect(()=>{
      
        if(running){
           inputref.current = setInterval(()=>{
                setCount((prev)=>prev+1)
            },1000)
        }
            return ()=>{
                clearInterval( inputref.current )
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