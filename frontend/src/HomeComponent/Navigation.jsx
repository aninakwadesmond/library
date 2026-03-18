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
import { useEffect } from "react";
import { api2 } from "../Axios/api";

function Navigation({ name }) {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state) => state.navigation);

 const navigate =  useNavigate()

  function handleShowNav() {
    dispatch(openNav());
    navigate('/')
  }
  return (
    <div className="flex w-full items-center justify-between ">
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
  const { query, search } = useSelector((state) => state.homecards);
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
        dispatch(setBooksLoading(true));
        const { data } = await api2.get(`/books?search=${query}`);
        console.log("new data from query", data.results);
        dispatch(setBooks(data.results));
        dispatch(setBooksLoading(false));
        dispatch(setSearch(false));
      } catch (error) {
        throw new Response(
          JSON.stringify(error?.message || "Failed to fetch books by category"),
        );
      }
    }

    if (!search) return;
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
  const {cartItems} = useSelector(state => state.cart)
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
        <div className="relative order-2">
        <FontAwesomeIcon icon={faShoppingCart} className="text-orange" />
          {cartItems.length > 0 && <span className="absolute -top-2 -right-2 flex h-5 w-5 flex-col items-center justify-center rounded-full bg-orange/60 p-1 text-center text-[12px] font-bold text-gray-50">
            {cartItems.length}
          </span> }
          
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
