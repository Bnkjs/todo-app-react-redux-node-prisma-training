import { VISIBILITY_FILTER } from "../utils"

export const filterSelector = ({filter}) => filter 

export const getTodosVisibilityFilter = (store, visibilityFilter) => {
  switch(visibilityFilter){
    case VISIBILITY_FILTER.COMPLETED:
      return store.filter(todo => todo.completed)
    case VISIBILITY_FILTER.IMCOMPLETED:
      return store.filter(todo => !todo.completed)
    case VISIBILITY_FILTER.ALL:
      return store
  }
}