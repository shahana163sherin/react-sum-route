import { useReducer, useState } from "react";

const reducer = (state,action) => {
    switch(action.type) {
        case "ADD_TODO":
            return[...state, action.payload];
        case "REMOVE_TODO":
            return state.filter((t)=>t.id !== action.payload.id);
        case "UPDATE_TODO":
            return state.map((t) =>
                t.id === action.payload.id ? {...t, text: action.payload.text} : t
            );
        default:
            return state;
    }

}

const Todo = () => {

const [todos,setTodods]=useState([])
const[state,dispatch]=useReducer(reducer,[])


    return (
        <div>
            <input type="text"
            onChange={(e)=>setTodods(e.target.value)}
            value={todos}/>
            <br />
            <button onClick={() => {
                dispatch({type: "ADD_TODO", payload: {id: Date.now(), text: todos}});
                setTodods("");
            }}>Add Todo</button>
            {state.map((todo)=>(
                <li key={todo.id}></li>
            ))}

            
            
        </div>
    );
}
export default Todo;