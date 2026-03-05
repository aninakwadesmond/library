import {
  faAlarmClock,
  faFolder,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronRight,
  faExclamationTriangle,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BookOpenIcon,
  ChevronRightIcon,
  CircleStackIcon,
  KeyIcon,
  PlayCircleIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { openNav } from "../store/Feautures/Navigation_store";

function SideNavigation() {
  const dispatch = useDispatch();
  function handleCloseNav() {
    dispatch(openNav());
  }
  return (
    <div className="">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full bg-gray-300/20 lg:relative"></div>

      <div className="absolute top-0 left-0 z-20 h-full w-1/2 bg-white px-5 pt-5 lg:relative lg:w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex">
            <BookOpenIcon className="w-10 text-green-500" />
            <span className="text-[25px] font-bold text-green-500 uppercase">
              ook
            </span>
          </div>
          <button
            className="cursor-pointer border-0 p-1 outline-0"
            onClick={handleCloseNav}
          >
            <XCircleIcon className="w-8 text-red-400" />
          </button>
        </div>
        <Activities heading="Recouces">
          <Resource icon={faFolder} name="My folder" />
          <Resource icon={faArrowUpRightFromSquare} name="Shared with me " />
          <Resource icon={faAlarmClock} name="Recenttly viewed" />
          <Resource icon={faHeart} name="Recommended " />
        </Activities>
        <Activities heading="My Account">
          <Resource icon={faUserCircle} name="Contact" />
          <Resource icon={faPencilRuler} name="Notes " />
          <Resource icon={faExclamationTriangle} name="Log out" />
          {/* <Resource icon={faHeart} name="Recommended " /> */}
        </Activities>

        <div className="bottom-0 left-0 mt-10 flex h-40 w-full flex-col content-center items-center justify-center rounded-md bg-orange-100/50 shadow-lg shadow-orange-200/70">
          <div className="max-h-[80%] w-2/3 text-center">
            <img
              src="/designs/book.jpg"
              alt=""
              className="h-full w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Resource({ icon, name }) {
  return (
    <div className="group flex w-full cursor-pointer items-center justify-start gap-2 rounded-md p-2 hover:bg-red-200">
      <span className="opacity-0 group-hover:opacity-100">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[12px] font-bold group-hover:text-red-500"
        />
      </span>

      <FontAwesomeIcon icon={icon} className="group-hover:text-red-500" />
      <span className="text-sm font-semibold tracking-tight text-gray-900/70 group-hover:text-red-500">
        {name}
      </span>
    </div>
  );
}

function Activities({ heading, children }) {
  return (
    <div className="mt-10 flex flex-col items-start justify-center gap-3">
      <div className="item-start flex w-full flex-col justify-center gap-2">
        <p className="text-[11px] font-semibold tracking-tight text-gray-900/50 capitalize">
          {heading}
        </p>
        {children}
      </div>
    </div>
  );
}
export default SideNavigation;
