// import Clock from "./Components/clock";
// import TodoCounter from "./Components/todo";
// import Counter from './Components/CounterTodo'
// import Home from './Components/home'
// import Login from './Components/login'
// import Cart from './Components/cart'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {Routes,Route, Link, useNavigate} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import Page1 from './Components/page1';
import Page2 from './Components/page2'
import Page3 from './Components/page3';
const App = () =>{
  // const navigate=useNavigate()

  // function Logout(){
  //   localStorage.removeItem("user")
  //   navigate("/")
    
  // }
  
  return (
    <>
    {/* <Counter/> */}
    {/* <TodoCounter/> */}
       {/* <Clock/> */}
       {/* <nav>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/cart">Cart</Link>
          <button onClick={Logout}>Logout</button>

        </li>
       </nav> */}

       <Routes>
         <Route path="/" element ={<Page1/>}/> 
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>
        {/* <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/> */}
       


       </Routes>
       {/* <ToastContainer position="top-center" autoClose={2000} /> */}
       
    </>
  
  );


}
export default App