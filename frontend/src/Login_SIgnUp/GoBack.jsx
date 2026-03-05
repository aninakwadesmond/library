import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function GoBack() {
  return (
    <div className="flex-col-start absolute top-[2%] left-[2%] w-full">
      <Link className="flex-start group gap-2" to={"../"} relative="path">
        <span className="flex-placecenter h-6 w-6 rounded-full bg-amber-50 p-1 shadow-md transition duration-300 group-hover:bg-red-300">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-[14px] font-semibold text-gray-700"
          />
        </span>
        <span className="font-bold tracking-tight text-gray-600">Go back</span>
      </Link>
    </div>
  );
}

export default GoBack;
