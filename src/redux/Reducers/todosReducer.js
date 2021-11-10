import { ADD_TODO, DELETE_TODO, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE } from "../Types/Types";

const todosReducer = (state = [], action) => {
  switch (action.type){
    case FETCH_TODOS_SUCCESS:
      return[
        ...state, ...action.payload 
      ]
      case FETCH_TODOS_FAILURE:
      return[
        ...state, ...action.payload 
      ]
    case ADD_TODO:
      return[
        ...state, ...action.payload 
      ]
    case UPDATE_TODO_SUCCESS:
      return state.map(todo => {
        if(todo.id === action.payload.id){
          return{...todo, ...action.payload}
        } else{
          return todo
        }
      })
    case UPDATE_TODO_FAILURE:
      return[
        ...state, ...action.payload 
      ]  
    case UPDATE_TODO:
      return state.map(todo => {
        if(todo.id === action.payload.id){
          return{...todo, ...action.payload}
        } else{
          return todo
        }
      })
      case DELETE_TODO:
        return state.filter(todo => todo.id === action.payload)
      default:
        return state
  }
}

export default todosReducer