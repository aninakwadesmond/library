import { faMehRollingEyes, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisV,
  faFolder,
  faListDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  setBooks,
  setBooksLoading,
  setCategory,
  setSearch,
} from "../store/Feautures/HomeCards";
import { useEffect, useState } from "react";
import { api, api2, server } from "../Axios/api";

const categories = [
  "fiction",
  "science fiction",
  "fantasy",
  "adventure",
  "romance",
  "mystery",
  "horror",
  "philosophy",
  "psychology",
  "history",
  "politics",
  "religion",
  "science",
  "mathematics",
  "astronomy",
  "biology",
  "chemistry",
  "physics",
  "economics",
  "business",
  "education",
  "literature",
  "poetry",
  "drama",
  "children",
  "young adult",
  "mythology",
  "folklore",
  "war",
  "military",
  "travel",
  "art",
  "music",
  "theater",
  "medicine",
  "law",
  "engineering",
  "technology",
  "programming",
  "language",
  "linguistics",
];

const colors = [
  "text-amber-300",
  "text-blue-400",
  "text-violet-300",
  "text-pink-400",
  "text-red-500",
  "text-emerald-400",
  "text-indigo-300",
  "text-yellow-400",
  "text-cyan-400",
  "text-fuchsia-400",
];

function BookTitles() {
  const dispatch = useDispatch();

  const { category, query, search } = useSelector((state) => state.homecards);
  function handleSetCategory(category) {
    dispatch(setCategory(category));
  }
  // const [cheackSearch, setCheckSearch] = useState(search);

  useEffect(() => {
    async function fetchBooksByCategory() {
      try {
        dispatch(setBooksLoading(true));
      dispatch(setBooks([]));
        const { data } = await server(`/books/search?search=${category}`);
        console.log("new data from query", data);
        dispatch(setBooks(data));
        // dispatch(setBooksLoading(false));
      } catch (error) {
        throw new Response(
          JSON.stringify(error?.message || "Failed to fetch books by category"),
        );
      }
    }

    if (!categories) return;
    fetchBooksByCategory();
  }, [category]);

  // mt-6 grid w-full cursor-pointer grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <div className="w-full overflow-hidden">
      <div className="thin-scrollbar flex-start cursor-pointer gap-2 overflow-auto">
        {categories.map((book) => (
          <BookTitle
            book={book}
            handleSetCategory={handleSetCategory}
            color={randomColor()}
          />
        ))}
      </div>
    </div>
  );
}

function BookTitle({ obj, handleSetCategory, book: text, color }) {
  // const { color, text } = obj;

  return (
    <div className="flex items-center justify-between gap-2 rounded-md bg-white px-2 py-1 shadow-sm">
      <div
        className="flex items-center justify-start gap-2"
        onClick={() => handleSetCategory(text)}
      >
        <BookOpenIcon className={`h-4 w-4 ${color}`} />
        <p className="line-clamp-1 text-[12px] font-semibold tracking-tight text-gray-950/60 capitalize">
          {text}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <FontAwesomeIcon
          icon={faStar}
          className="text-[12px] font-semibold text-gray-500/80"
        />
        <FontAwesomeIcon
          icon={faEllipsisV}
          className="text-[11px] font-semibold text-gray-500"
        />
      </div>
    </div>
  );
}

export default BookTitles;
