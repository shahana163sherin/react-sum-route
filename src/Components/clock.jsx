import { useEffect, useState } from "react"

const Clock = () =>{

    const[running,setRuning]=useState(false)
    const [time,setTime]=useState(new Date())

   
    const hours=time.getHours()
    const minutes=time.getMinutes()
    const second=time.getSeconds()
    
    useEffect(()=>{
        let interval
        if(running){
             interval = setInterval(()=>
                setTime(new Date())
       ,1000)

        }
          
        return ()=>clearInterval(interval)
    },[running])
    function reset(){
        setRuning(false)
        setTime(new Date())
            }
  
    return (<div>
        <h2>{hours}:{minutes}:{second}</h2>
        <button onClick={()=>setRuning(true)}>Start</button>
        <button onClick={reset}>Reset</button>
        <button  onClick={()=>setRuning(false)}>Stop</button>
    </div>);

}
export default Clock