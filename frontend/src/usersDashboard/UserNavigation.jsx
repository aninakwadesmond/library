import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import "@fortawesome/free-brands-svg-icons";
import { faSearchengin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { DashboardContext } from "../Context/DashbordContext";

function UserNavigation() {
  // const [openModal, setOpenModal] =useState(false); 

  // function handleOpenModal(){
  //   setOpenModal(true)
  // }

  const {handleOpenModal} = useContext(DashboardContext)
  return (
    <div className="py-2.rounded-md flex w-full items-center justify-between px-3 py-3 shadow-lg shadow-gray-300/20">
        <span className="flex-placecenter w-9 h-9 rounded-full hover:bg-linear-to-br from-green-600 to-green-200  duration-300 transition-all cursor-pointer lg:hidden" onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faNavicon} className="text-gray-600 font-bold text-lg"/>
      </span>
      <div className="flex flex-col items-center justify-center p-1">
        <BookOpenIcon className="w-7 text-green-400" />
      </div>
      <div className="flex items-center justify-start gap-)2">
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
