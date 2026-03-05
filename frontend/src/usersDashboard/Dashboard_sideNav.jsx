import {
  faAddressBook,
  faBell,
  faEdit,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBasketShopping,
  faCarSide,
  faDownload,
  faGridHorizontal,
  faHeartbeat,
  faLongArrowLeft,
  faRotateBack,
  faTicket,
  faTimes,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LockClosedIcon } from "@heroicons/react/24/solid";

function Dashboard_sideNav() {
  return (
    <div className="">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-gray-300/40 md:hidden"></div>
      <div className="absolute top-0 left-0 flex min-h-screen flex-col items-start justify-center gap-y-6 rounded-md bg-white px-3 py-4 shadow-lg lg:relative">
        <div className="group absolute top-2 left-53 z-10 flex h-7 w-7 cursor-pointer flex-col items-center justify-center rounded-full bg-red-400 shadow-md duration-300 hover:bg-red-100 lg:hidden">
          <FontAwesomeIcon
            icon={faTimes}
            className="font-bold text-red-50 transition duration-300 group-hover:text-red-300"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-3 rounded-md">
          <div className="flex items-start justify-center gap-3">
            <div className="flex w-20 flex-col items-center justify-center">
              <img
                src="/designs/book.jpg"
                alt="book"
                className="h-[90%] w-[90%] rounded-md"
              />
            </div>
            <div className="flex max-w-60 flex-col items-start justify-center gap-y-1">
              <p className="truncate text-[14px] font-bold text-gray-400 capitalize">
                anna barros
              </p>
              <p className="text-[11px] font-bold tracking-tighter text-gray-300">
                +12223456544
              </p>
              <p className="items-startjustify-center flex w-full flex-col">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="cursor-pointer text-[15px] font-bold text-gray-600"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-y-4">
          <p className="flex w-full items-center justify-start gap-2 rounded-md bg-green-600/80 px-2 py-3 shadow">
            <FontAwesomeIcon
              icon={faGridHorizontal}
              className="text-[14px] text-green-50"
            />
            <span className="text-[14px] font-bold tracking-tight text-gray-50 capitalize">
              Dashboard
            </span>
          </p>
          <div className="[&_p]:group flex w-full flex-col items-start justify-center gap-2">
            <Dash_Action icon={faDownload} name="Download" />
            <Dash_Action icon={faBell} name="notification" />
            <Dash_Action icon={faCarSide} name="orders" />
            <Dash_Action icon={faBasketShopping} name="cart" />
            <Dash_Action icon={faAddressBook} name="address" />
            <Dash_Action icon={faHeartbeat} name="wishlist" />
            <Dash_Action icon={faWallet} name="wallet" />
            <Dash_Action icon={faTicket} name="Tickets" />
          </div>
        </div>
        <div className="mt-auto flex w-full flex-col items-start justify-center gap-2 pb-10">
          <Dash_Action icon={faRotateBack} name="Back to home" />
          <Dash_Action icon={faLongArrowLeft} name="Log Out" />
        </div>
      </div>
    </div>
  );
}

function Dash_Action({ icon, name }) {
  return (
    <p className="group flex w-full cursor-pointer items-center justify-start gap-2 rounded-md px-2 py-1 transition duration-300 hover:bg-green-300 hover:text-green-50">
      <FontAwesomeIcon
        icon={icon}
        className="text-[14px] text-gray-600 duration-500 group-hover:scale-120"
      />
      <p className="text-[14px] font-bold tracking-tighter text-gray-500 capitalize">
        {name}
      </p>
    </p>
  );
}

export default Dashboard_sideNav;
