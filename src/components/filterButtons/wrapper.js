import styled, {css} from "styled-components"

export const Container  = styled.div`
  display: inline;
`
export const ButtonsFilter = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: "whitesmoke";
  font-size: 1em;
  border: none;
  cursor: pointer;
  color: "black";
  ${props => props.todo && css`
      background-color: paleturquoise;
  `}
  ${props => props.done && css`
      background-color: greenyellow;
  `}
  &:active{
    transform: scale(1.1);
  }
`

