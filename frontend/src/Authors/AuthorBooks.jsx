import {
  faBell,
  faChevronDown,
  faFunnelDollar,
  faGridHorizontal,
  faNavicon,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { setAuthorBooks } from "../store/Feautures/AuthorSlide";
import Cards from "../HomeComponent/Cards";
import Pagination from "../Components/Pagination";
import AuthorCard from "./AuthorCard";

function AuthorBooks() {
  return (
    <div className="flex-col-start min-h-screen w-full justify-start gap-3 bg-linear-to-tl from-mist-100 to-mist-50 px-3 py-4">
      <Navigation />
      <BodyContent />
    </div>
  );
}

function CardsContainer() {
  const { results } = useLoaderData();
  const dispatch = useDispatch();
  console.log("response data from api call", results);

  //results run ones on mount and will never change , to make eslint happy by removing the yellow lines , I have to use them as depencies but not neccessary

  useEffect(() => {
    dispatch(setAuthorBooks(results));
  }, [dispatch, results]);

  const { books } = useSelector((state) => state.author);
  console.log("books cover image", results, books);
  return (
    <div className="mt-6 w-full">
      <AuthorCard books={results} />
    </div>
  );
}

function TopNav() {
  return (
    <div className="flex-between mt-3 w-full">
      <div className="flex-start rounded-md bg-gray-400">
        <Button color="bg-gray-900/70 text-gray-100 p-2 rounded-0">
          Popular
        </Button>
        <Button color="text-gray-100 p-2 rounded-0">Feautured</Button>
        <Button color="text-gray-100 p-2 rounded-0">Latest</Button>
      </div>
      <div className="flex-placecenter">
        <Button color="bg-gray-300">
          <div className="flex-start gap-1">
            <FontAwesomeIcon
              icon={faFunnelDollar}
              className="text-[10px] text-gray-500"
            />
            <span className="text-sm font-semibold tracking-tight text-gray-600 capitalize">
              Filter
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[10px] text-gray-500"
            />
          </div>
        </Button>
      </div>
    </div>
  );
}

function BodyContent() {
  return (
    <div className="w-full rounded-md bg-white px-2 py-3 shadow-md">
      <BodyTop />
      <TopNav />
      <CardsContainer />
      <Pagination />
    </div>
  );
}

function BodyTop() {
  return (
    <div className="flex-between w-full">
      <h4 className="text-capitalize font-bold tracking-tight text-gray-600">
        Books Collection
      </h4>
      <div className="flex-start gap-2">
        <Button
          color="bg-gray-400 text-gray-600 "
          icon={faNavicon}
          text_color="text-gray-600"
        />
        <Button
          color="bg-orange-500 text-orange-100 "
          icon={faGridHorizontal}
          // text_color="text-gray-600"
        />
        <Button color="bg-orange-500 text-orange-100 " icon={faPlus}>
          Add Book
        </Button>
      </div>
    </div>
  );
}

function Button({ color, icon, children, text_color }) {
  return (
    <button
      className={`flex-start w-auto rounded-md px-2 py-1 shadow ${color} cursor-pointer gap-2 text-sm tracking-tight capitalize outline-0`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-md font-semibold ${text_color}`}
      />
      {children && children}
    </button>
  );
}

function Navigation() {
  const { authorName } = useSelector((state) => state.author);
  return (
    <div className="flex-between w-full">
      <div className="flex-col-start">
        <h3 className="font-bold tracking-tight text-gray-600 capitalize">
          Book
        </h3>
        <p className="flex-start gap 2">
          <span className="text-sm font-semibold tracking-tight text-orange-500">
            Customer
          </span>
          <span className="text-sm font-semibold tracking-tight text-gray-600">
            / Book
          </span>
        </p>
      </div>
      <div className="flex-start gap-2">
        <span className="flex-placecenter h-6 w-6 rounded-md bg-white shadow">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-sm font-semibold text-gray-900"
          />
        </span>
        <span className="flex-placecenter h-6 w-6 rounded-md bg-white shadow">
          <FontAwesomeIcon
            icon={faBell}
            className="text-sm font-semibold text-gray-900"
          />
        </span>
        <div className="flex-start gap-2">
          <div className="flex-placecenter h-8 w-8 rounded-full">
            <img
              // src="/images/image-0.jpg"
              src={`https://robohash.org/${authorName}.png`}
              alt="image of author"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="flex-col-start md:max-w-auto max-w-15">
            <p className="line-clamp-1 text-sm font-bold tracking-tighter text-gray-600 capitalize">
              {authorName}
            </p>
            <p className="text-[10px] tracking-tighter text-gray-400 capitalize">
              Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorBooks;
