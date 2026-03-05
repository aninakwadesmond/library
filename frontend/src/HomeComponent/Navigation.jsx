import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import {
  faNavicon,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "../store/Feautures/Navigation_store";
function Navigation({ name }) {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state) => state.navigation);

  function handleShowNav() {
    dispatch(openNav());
  }
  return (
    <div className="flex w-full items-center justify-between">
      <button
        className="cursor-pointer border-0 bg-none p-1 outline-0"
        onClick={handleShowNav}
      >
        <FontAwesomeIcon icon={faNavicon} />
      </button>
      {name ? <NameOfBook name={name} /> : <SearchInput />}

      <Accounts />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="relative w-62 rounded-full shadow md:w-100 md:bg-red-50">
      <input
        className="w-full rounded-full p-2 pl-12 text-sm text-[12px] font-semibold tracking-wider text-gray-400 shadow-sm outline-none placeholder:capitalize"
        placeholder="search"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute top-[50%] left-[5%] -translate-y-[50%] text-[13px] text-gray-950/70"
      />
    </div>
  );
}

function Accounts() {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center justify-center gap-1">
        <Link to={"/login_signup"}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to={"/dashboard"}>
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <Link className="flex-placecenter" to={"/cart"}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </div>
  );
}

function NameOfBook({ name }) {
  return (
    <p className="text-[2rem] font-bold tracking-tight text-green-950">
      {name}
    </p>
  );
}

// function SideNavigation() {
//   return div;
// }

export default Navigation;
