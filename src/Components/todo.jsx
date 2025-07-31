import { useReducer, useState } from "react"

const reducer = (state,action) =>{
    switch(action.type){
        case "ADD_TOTDO":
            return[...state,{id:Date.now(),text:action.payload}]
        case "DELETE_TODO":
            return state.filter((t)=>t.id !== action.payload)
        default:
            return state;
    }

}


const TodoCounter = () =>{

    // const [todo,setTodo]=useState([])
    const [state,dispatch]=useReducer(reducer,[])
    const[text,setText]=useState("")

    return (
        <div>
            <input type="text"
            placeholder="Enter your task"
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>dispatch({type:"ADD_TOTDO",payload:text})}>Add</button>
            {state.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>dispatch({type:"DELETE_TODO",payload:todo.id})}>Delete</button>
                </li>
            ))}
            
        </div>
    );
    
}
export default TodoCounter