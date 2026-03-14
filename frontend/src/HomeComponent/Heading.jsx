import {
  faGridHorizontal,
  faNavicon,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../store/Feautures/HomeCards";

function Heading() {
  return (
    <div className="mt-6 flex w-full items-center justify-between">
      <div className="flex items-center justify-center gap-1">
        <h3 className="text-[1.5rem] font-semibold tracking-wide text-gray-900">
          My library
        </h3>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="items-start text-[12px] text-red-300"
        />
      </div>
      <div className="flex items-center justify-center gap-2 rounded-full bg-slate-200 px-4 py-2">
        <Select />
        <FontAwesomeIcon
          icon={faGridHorizontal}
          className="text-[12px] text-gray-900/80"
        />
        <FontAwesomeIcon
          icon={faNavicon}
          className="text-[12px] text-gray-900/80"
        />
      </div>
    </div>
  );
}

function Select() {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.homecards);

  function handleSortBy(value) {
    dispatch(setSortBy(value));
  }
  return (
    <select
      name="name"
      id=""
      className="line-clamp-1 w-10 text-[9px] font-semibold tracking-normal text-gray-900 uppercase outline-0 focus:rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
      value={sortBy}
      onChange={(e) => handleSortBy(e.target.value)}
    >
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
      <option value="downloads">downoloads</option>
      <option value="birth">Athours birth_year</option>
      <option value="death">Athours death_year</option>
    </select>
  );
}

export default Heading;
