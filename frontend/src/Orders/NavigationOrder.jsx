import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faBookOpen,
  faNavicon,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function NavigationOrder({data}) {
  const {fullName, _id:id} = data; 
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <div className="flex w-full items-center justify-between">
        <Link to={'/cart/shipping'}>
        <FontAwesomeIcon icon={faArrowLeft}  className="text-[1.2rem] font-semibold text-gray-900 cursor-pointer"/>
        </Link>
        <NavigationBox />
        <p className="flex flex-col items-center justify-center md:hidden">
          <UserCircleIcon className=",m.3 dcx old w-6 text-gray-400" />
        </p>
        <div className="hidden items-center justify-start gap-2 md:flex min-w-50 ">
          <FontAwesomeIcon
            icon={faBell}
            className="text-[14px] font-semibold text-gray-400"
          />
          <div className="flex w-full items-center justify-start gap-1">
            <UserCircleIcon className="text-[17px] text-gray-500" />
            <div className="items-between flex w-full flex-col justify-center">
              <p className="line-clamp-1 text-[13px] font-bold tracking-tight capitalize text-gray-500">
                {fullName||'user'}
              </p>
              <span className="text-gray-4100 text-[11px] font-semibold tracking-tighter text-gray-400">
                {id|| 'orderId'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigationBox() {
  return (
    <div className="relative flex w-70 items-center justify-between rounded-md bg-gray-200 px-2 shadow-md">
      <span className="absolute top-[50%] left-2 -translate-y-[50%]">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </span>
      <input
        className="relative w-full border-0 px-6 py-2 text-[14px] font-semibold tracking-wide text-gray-700 outline-0 placeholder:capitalize"
        placeholder="search"
      />

      <span className="flex flex-col items-center justify-center bg-white p-1">
        <FontAwesomeIcon
          icon={faBookOpen}
          className="text-[11px] text-gray-500"
        />
      </span>
    </div>
  );
}
export default NavigationOrder;
