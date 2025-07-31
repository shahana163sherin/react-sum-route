import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Login = () =>{
    const[form,setForm]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()

    function HandleSubmit  (){

        localStorage.setItem("user",JSON.stringify(form))
        navigate("/home")


    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={HandleSubmit}>
            <input type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
            required/>
            <input type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e)=>setForm({...form,password:e.target.value})}
            required/>
            <button typr="submit">Login</button>
            </form>
        </div>
    );

}
export  default Login