import React from "react";
import '../Todo/style.css'
export const Todo = ({title, completed, onToggle, isCompleted}) => {


  return (
    <div id="container-input">
      <input className="todo-el" type="checkbox" checked={completed} onChange={onToggle}/>
      { isCompleted? 
       <span id="todo-done">To Do Done 🤩:  {title}</span>
       :
       <span>To Do: {title}</span>
      }  
    </div>
  )
}
