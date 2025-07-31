import { useState } from "react"
import { useNavigate,useLocation } from "react-router-dom"

const Page2 = () => {
    const [name2,setName2]=useState("")
    const navigate=useNavigate()
    const location = useLocation()

    return(
        <div>
             <input type="number"
        placeholder="enter second number"
        value={name2}
        onChange={(e)=>setName2(Number(e.target.value))}/>
        <button onClick={()=>navigate("/page3",{state:
            {
                name:location.state.name,name2
            }
        })}>Go to sum</button>
        </div>
    );

}
export default Page2