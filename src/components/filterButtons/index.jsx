import { ButtonsFilter, Container } from "./wrapper"
import React from "react"
import { FilterDispatch } from "../../redux/hooks/filterDispatch"
import { SET_FILTER } from "../../redux/Types/Types"
import { VISIBILITY_FILTER } from "../../redux/utils"
import { v4 as uuidv4 } from 'uuid';
import { setFilterAction } from "../../redux/Actions/filterActions"

export const FilterButton = () => {
  const dispatch = FilterDispatch()
  const btns = Object.keys(VISIBILITY_FILTER).map(filterkey => {
    const currentFilter = VISIBILITY_FILTER[filterkey]
    return (
      <ButtonsFilter 
        key={uuidv4()}
        onClick={() => dispatch(setFilterAction(currentFilter))}>
        {filterkey}
      </ButtonsFilter>
    )
  })
  return(<>
      <Container>
        {btns}
      </Container>
  </>)
}