import {
  faGridHorizontal,
  faNavicon,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  return (
    <select
      name="name"
      id=""
      className="text-[9px] font-semibold tracking-normal text-gray-900 uppercase outline-0"
    >
      <option value="a-z">A-Z</option>
    </select>
  );
}

export default Heading;
