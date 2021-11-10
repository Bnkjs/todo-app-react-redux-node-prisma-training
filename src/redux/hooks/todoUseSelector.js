import { useSelector } from "react-redux";
import { articleSelectors } from "../Selectors/articleSelector"

const TodoUseSelector = () => {
  return useSelector(articleSelectors)
}

export default TodoUseSelector;
