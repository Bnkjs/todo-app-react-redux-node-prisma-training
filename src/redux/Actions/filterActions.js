import { SET_FILTER } from "../Types/Types";

export const setFilterAction = (filter) => ({
  type: SET_FILTER,
  payload: filter
})