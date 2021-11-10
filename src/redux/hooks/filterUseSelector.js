import { useSelector } from "react-redux";
import { filterSelector } from "../Selectors/filterSelector";

const FilterUseSelector = () => {
  return useSelector(filterSelector)
}

export default FilterUseSelector;