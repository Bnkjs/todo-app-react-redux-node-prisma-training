import { combineReducers } from "redux"

import todosReducer from "./Reducers/todosReducer"
import visibilityFilterReducer from "./Reducers/visibilityFilterReducer"


export const rootReducers = combineReducers({
  todos: todosReducer,
  filter: visibilityFilterReducer
})