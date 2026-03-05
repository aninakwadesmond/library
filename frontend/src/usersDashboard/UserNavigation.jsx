import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import "@fortawesome/free-brands-svg-icons";
import { faSearchengin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function UserNavigation() {
  return (
    <div className="py-2.rounded-md flex w-full items-center justify-between px-3 py-3 shadow-lg shadow-gray-300/20">
      <div className="flex flex-col items-center justify-center p-1">
        <BookOpenIcon className="w-7 text-green-400" />
      </div>
      <div className="flex items-center justify-start gap-2">
        <FontAwesomeIcon
          className="text-6 text-gray-400"
          icon={faSearchengin}
        />
        <FontAwesomeIcon className="text-6 text-gray-400" icon={faBell} />
        <FontAwesomeIcon className="text-6 text-gray-400" icon={faWhatsapp} />
      </div>
    </div>
  );
}

export default UserNavigation;
