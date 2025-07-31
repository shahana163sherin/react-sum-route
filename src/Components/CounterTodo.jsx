import {useEffect, useReducer,useState} from 'react'
const reducer = (state,action)=>{
    switch(action.type){
        case "AddTodo":
            return [...state,{id:Date.now(),count:action.payload}]
        case "Delete_Todo":
            return state.slice(0,-1)
        default:
            return state;
    }
}
const Counter = () =>{
    const [count,setCount]=useState(0)
    const[state,dispatch]=useReducer(reducer,[])

    useEffect(()=>{
        setCount(state.length+1)
    },[state])

    return(
        <div>
            <h2>{state.length}</h2>  {/*when tou want to display the last counted value we can use count*/}
            <button onClick={()=>{
            // const newCount=state.length+1
            // setCount(newCount)
                dispatch({type:"AddTodo",payload:state.length+1})}}>
                    {/*when i use useEffect change 
                    dispatch({type:"ADDTODO",payload:state.length+1})
                    remove the newcount part.then add it in useEffect */}
                Add</button>
            
            <button onClick={()=>dispatch({type:"Delete_Todo"})}>Delete</button>
            {state.map((u)=>(
            <li key={u.id}>{u.count}</li>
            ))}      
        </div>
    );
    
    
}
export default Counter