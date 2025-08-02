// import { useReducer, useState } from "react"
// import "./todo.css"

// const reducer = (state,action) =>{
//     switch(action.type){
//         case "ADD_TODO":
//             return[...state,{id:Date.now(),text:action.payload}]
//         case "DELETE_TODO":
//             return state.filter((t)=>t.id !== action.payload)
//             case "EDIT_TODO":
//                 return state.map((todo)=>todo.id === action.payload.id ? {...todo,
//                     text:action.payload.text
//                 }:todo)
            

//         default:
//             return state;
//     }

// }


// const TodoCounter = () =>{

//     // const [todo,setTodo]=useState([])
//     const [state,dispatch]=useReducer(reducer,[])
//     const[text,setText]=useState("")
//     const [Editid,setEditId]=useState(null)

//     // const INSTyle={position:"absolute",
//     //     top:"50%",
//     //     left:"50%",
//     //     transform:"translate(-50% , -50% )"
//     // }

//     const AddTodooo=()=>{
//         if(text.trim("")){
//         if(Editid)
//         {
//             dispatch({type:"EDIT_TODO",payload:{id:Editid,text:text}})
            
//         }
//         else{
//         dispatch({type:"ADD_TODO",payload:text})
        
//         }
//         setText("")
//     }
// }

//     return (
//         <div style={{display:"flex",
//             flexFlow:"column wrap",
//         justifyContent:"center",
//         alignItems:"center",
//         height:"100vh",
//         width:"100vw"}}>
//             <input type="text"
//             className="inputBox"
//             placeholder="Enter your task"
//             value={text}
//             onChange={(e)=>setText(e.target.value)}/>
//             <button className="button1"
//             onClick={AddTodooo}>{Editid? "UPDATE" : "ADD"}</button>
//             {state.map((todo)=>(
//                 <li key={todo.id}>
//                     {todo.text}
//                     <button onClick={()=>dispatch({type:"DELETE_TODO",payload:todo.id})}>Delete</button>
//                     <button onClick={()=>{
//                         setText(todo.text)
//                         setEditId(todo.id)
//                     }}>EDIT</button>
//                 </li>
//             ))}
            
//         </div>
//     );
    
// }
// export default TodoCounter


import { useReducer, useState } from "react";
import "./todo.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload,complete:false }];
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "TOGGLE_TODO":
        return state.map((t)=>t.id === action.payload ? {...t,complete:!t.complete}:t)
    default:
      return state;
  }
};

const TodoCounter = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (text.trim() === "") return;

    if (editId) {
      dispatch({ type: "EDIT_TODO", payload: { id: editId, text } });
      setEditId(null);
    } else {
      dispatch({ type: "ADD_TODO", payload: text });
    }

    setText("");
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo App</h1>
      <div className="input-section">
        <input
          type="text"
          className="inputBox"
          placeholder="Enter your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="button1" onClick={handleAddTodo}>
          {editId ? "UPDATE" : "ADD"}
        </button>
      </div>

      <ul className="todo-list">
        {state.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox"
            checked={todo.complete}
            onChange={()=>dispatch({type:"TOGGLE_TODO",payload:todo.id})}/>
            {todo.complete ? <span style={{textDecoration:"line-through"}}>{todo.text}</span> :
            <span style={{textDecoration:"none"}}>{todo.text}</span>}
            {/* <span>{todo.text}</span> */}
            <div>
              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                ❌
              </button>
              <button
                className="edit-btn"
                onClick={() => {
                  setText(todo.text);
                  setEditId(todo.id);
                }}
              >
                ✏️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCounter;
