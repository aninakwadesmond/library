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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "../store/Feautures/Navigation_store";
import {
  setBooks,
  setBooksLoading,
  setQueryInput,
  setSearch,
} from "../store/Feautures/HomeCards";
import { useEffect, useState } from "react";
import { api2, server } from "../Axios/api";

function Navigation({ name, icon=faNavicon , iconEnd}) {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state) => state.navigation);

  const navigate = useNavigate();

  function handleShowNav() {
    console.log('setnav')
    dispatch(openNav());
    // navigate("/");
  }
  return (
    <div className="flex w-full items-center justify-between ">
      {iconEnd ?<Link to ='/'
        className="cursor-pointer border-0 bg-none p-1 outline-0 "
        
      >      <FontAwesomeIcon icon={iconEnd} /></Link>:<button
        className="cursor-pointer border-0 bg-none p-1 outline-0 xl:hidden"
        onClick={handleShowNav}
      >      <FontAwesomeIcon icon={icon} /></button>}

      {name ? <NameOfBook name={name} /> : <SearchInput />}

      <Accounts />
    </div>
  );
}

function SearchInput() {
  const { query, search , booksLoading} = useSelector((state) => state.homecards);
  const dispatch = useDispatch();
  function handleQueryInput(e) {
    dispatch(setQueryInput(e.target.value));
  }

  function handleSearch() {
    console.log("navigation to start");
    dispatch(setSearch(true));
    console.log("new search", search);
  }

  useEffect(() => {
    async function fetchBooksByCategory() {
      try {
        console.log('books  serach start')
        dispatch(setBooksLoading(true));
        dispatch(setBooks([])); 
        const { data } = await server(`/books/search?search=${query}`);
        console.log("new data from query",data ,  );
        dispatch(setBooks(data));
        dispatch(setBooksLoading(false));
        dispatch(setQueryInput('')); 
        dispatch(setSearch(false));
      } catch (error) {
        throw new Response(
          JSON.stringify(error?.message || "Failed to fetch books by category"),
        );
      }
    }

    if (!query || query.length < 3) return;
    fetchBooksByCategory();
  }, [search]);

  return (
    <div className="relative w-62 rounded-full shadow md:w-100 md:bg-red-50">
      <input
        value={query}
        onChange={(e) => handleQueryInput(e)}
        className="w-full rounded-full p-2 pl-12 text-sm text-[12px] font-semibold tracking-wider text-gray-400 shadow-sm outline-none placeholder:capitalize"
        placeholder="search"
      />
      <span
        className="flex-plcecenter absolute top-[50%] left-[5%] -translate-y-[50%] cursor-pointer p-1"
        onClick={handleSearch}
      >
        <FontAwesomeIcon
          icon={faSearch}
          className="text-[13px] text-gray-950/70"
        />
      </span>
    </div>
  );
}

function Accounts() {
  const { cartItems } = useSelector((state) => state.cart);
  const [dropdown, setDropdown] = useState(false);

  function handleToggleModel() {
    setDropdown((prev) => !prev);
  }
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center justify-center gap-1">
        <button className="relative cursor-pointer">
          <FontAwesomeIcon icon={faUser} onClick={handleToggleModel} />
          {dropdown && (
            <div className="flex-col-start top 100 absolute right-[50%] left-[50%] z-30 w-40 -translate-x-[50%] rounded-md bg-amber-100 shadow-md">
              <Link
                className="text-md text-md w-full cursor-pointer rounded-md p-2 text-center font-semibold tracking-tight transition duration-400 hover:scale-102 hover:bg-green-300 hover:text-white"
                to={"/signup"}
              >
                Log in
              </Link>
              <Link
                className="text-md text-md w-full cursor-pointer rounded-md p-2 text-center font-semibold tracking-tight transition duration-400 hover:scale-102 hover:bg-green-300 hover:text-white"
                to={"/login"}
              >
                Sign up
              </Link>
            </div>
          )}
        </button>
        <Link to={"/dashboard"}>
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <Link className="flex-placecenter" to={"/cart"}>
          <div className="relative order-2">
            <FontAwesomeIcon icon={faShoppingCart} className="text-orange" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 flex-col items-center justify-center rounded-full bg-orange/60 p-1 text-center text-[12px] font-bold text-gray-50">
                {cartItems.length}
              </span>
            )}
          </div>
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

export default Navigation;
