import React, {useEffect} from "react"
import './wrapper'
import { Input } from "./wrapper"

export const AddTodo = ({dispatchAction, onChange, onSubmit}) => {
  
  return(<div>
      <form action="" onSubmit={onSubmit}>
        <Input 
        type="text" 
        onChange={onChange} 
       />
      </form>
    </div>
  )
}