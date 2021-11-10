import { ADD_TODO, ADD_TODO_SUCCESS, DELETE_TODO, FETCH_TODOS_FAILURE, FETCH_TODOS_SUCCESS, UPDATE_TODO, ADD_TODO_FAILURE, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE } from "../Types/Types"
import axios from 'axios'
 
export const addTodoAction = (datas) => {
  return{
     type: ADD_TODO,
     payload: datas 
  }
}

export const updatedTodoAction = (state) => ({
    type: UPDATE_TODO,
    payload: {...state, completed: !state.completed}
})

export const deleteTodoAction = (state) =>({
  type: DELETE_TODO,
  payload: state
})

export const fetchTodosSuccess = todos => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  }
}

export const fetchTodosFailure = error => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error
  }
}

export const addTodoSuccess = posts => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: posts
  }
}
export const addTodoFailure = error => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error
  }
}
export const updateTodoSuccess = (todo) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: {...todo, completed: !todo.completed}
  }
}
export const updateTodoFailure = error => {
  return {
    type: UPDATE_TODO_FAILURE,
    payload: error
  }
}

export const fetchTodoFromDbAction = () => {
  return (dispatch) => {
   try {
    axios.get('http://localhost:8000/')
    .then(res => {
      const posts = res.data
      dispatch(fetchTodosSuccess(posts))
    })
   } catch (error) {
     const errorMsg = error.message
     dispatch(fetchTodosFailure(errorMsg))
   }
  }
}

export const addTodoToDbAction = (newpost) => {
  return async (dispatch) => {
   try {
    await axios.post('http://localhost:8000/',{
      title: newpost,
      completed: false
    })
    .then(res => {
      dispatch(addTodoSuccess({
        title: newpost,
        completed: false
      }))
    })
   } catch (error) {
     const errorMsg = error.message
     dispatch(addTodoFailure(errorMsg))
   }
  }
}

export const updateTodoAction = (todo) => {
  return (dispatch) => {
    try {
     axios.post(`http://localhost:8000/todo/${todo.id.toString()}`, {
       id: todo.id,
       completed: !todo.completed
     })
     .then(res => {
       const posts = res.data
       dispatch(updateTodoSuccess(todo))
     })
    } catch (error) {
      const errorMsg = error.message
      dispatch(updateTodoFailure(errorMsg))
    }
   }
}

export const deleteTodoFromDbAction = (todo) => {
  return (dispatch) => {
    try {
     axios.delete(`http://localhost:8000/todo/${todo.id.toString()}`, {
       id: todo.id
     })
     .then(dispatch(deleteTodoAction(todo)))
    } catch (error) {
      const errorMsg = error.message
      dispatch(updateTodoFailure(errorMsg))
    }
   }
}