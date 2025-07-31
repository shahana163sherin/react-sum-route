import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Page1 = () => {
      const[name,setName]=useState("")
      const navigate = useNavigate()

      return(<div>
        <input type="number"
        placeholder="enter a number"
        value={name}
        onChange={(e)=>setName(Number(e.target.value))}/>
        <button onClick={()=>{
          navigate("/page2",{
            state:{
              name:name
            }
          })
        }}> Go to next</button>

      </div>);
}
export default Page1