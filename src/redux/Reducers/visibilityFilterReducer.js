import { SET_FILTER } from "../Types/Types";
import { VISIBILITY_FILTER } from "../utils";

const initalState = VISIBILITY_FILTER.ALL

const visibilityFilterReducer = (state = initalState, action) => {
  switch (action.type){
    case SET_FILTER:
      return action.payload
    default: 
    return state
  }
}

export default visibilityFilterReducer;