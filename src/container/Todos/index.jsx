import React, { useEffect, useState } from "react";
import { Todo } from "../../components/Todo";
import { useSelector } from "react-redux";
import TodoUseDispatch from "../../redux/hooks/todoDispatch";
import { addTodoToDbAction, deleteTodoFromDbAction, fetchTodoFromDbAction, updatedTodoAction, updateTodoAction } from "../../redux/Actions/articlesAction";
import '../Todos/style.css'
import { FilterButton } from "../../components/filterButtons";
import { getTodosVisibilityFilter } from "../../redux/Selectors/filterSelector";
import { v4 as uuidv4 } from 'uuid';
import { AddTodo } from "../../components/AddTodo/index";
import { initialStateDb } from "../../redux/utils";

export const Container = () =>{
  const [addNewArticle, setAddNewArticle] = useState(undefined)
  const dispatch = TodoUseDispatch()
  const onToggle = (state) => dispatch(updatedTodoAction(state))
  const { todos, filter } = useSelector(state => state)
  const filterTodos = getTodosVisibilityFilter(todos, filter)
  const [newRender, setNewRender] = useState(false)
  const addAnArticle = () => {
    dispatch(addTodoToDbAction(addNewArticle))
    setNewRender(!newRender)
  }
  const deleteArticle = (state) => {
    dispatch(deleteTodoFromDbAction(state))
    setNewRender(!newRender)
  }

  useEffect(()=> {
    const promiseAllPost = Promise.resolve(initialStateDb)
      promiseAllPost.then(posts => {
      dispatch(fetchTodoFromDbAction(posts))})
  },[newRender])

  const allTodos = filterTodos.map(todo => {
    function addTodoStatutToDb(){
      dispatch(updateTodoAction(todo))
    }
    return <div key={uuidv4()}>
        <Todo title={todo.title} completed={todo.completed} onToggle={() => onToggle(todo),addTodoStatutToDb} isCompleted={todo.completed} />
        <button onClick={()=> deleteArticle(todo)}>x</button>
      </div> 
  })
  return (
    <div id="container">
      <div className="todoList">
        <FilterButton value= {null}/>
        <h2>TodoList:</h2>
        <AddTodo dispatchAction={addAnArticle} onChange={(e) => {setAddNewArticle(e.target.value)}} onSubmit={addAnArticle} />
        <button onClick={addAnArticle}>Créer Tâche</button>
        {allTodos}
      </div>
      <div>
      </div>
    </div>
  )
}