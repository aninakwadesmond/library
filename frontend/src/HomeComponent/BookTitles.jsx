import { faMehRollingEyes, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisV,
  faFolder,
  faListDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookOpenIcon, DocumentIcon } from "@heroicons/react/24/solid";

const books = [
  { color: "text-amber-300", text: "art history" },
  { color: "text-blue-400", text: "biology" },
  { color: "text-violet-300", text: "history" },
  { color: "text-pink-400", text: "history 5 guide" },
  { color: "text-red-500", text: "history 6 guide" },
  { color: "text-emerald-400", text: "natural science" },
  { color: "text-indigo-300", text: "world history middle school" },
];

function BookTitles() {
  return (
    <div className="mt-6 grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books.map((book) => (
        <BookTitle obj={book} />
      ))}
    </div>
  );
}

function BookTitle({ obj }) {
  const { color, text } = obj;
  console.log(color, text, obj);
  return (
    <div className="flex items-center justify-between gap-2 rounded-md bg-white px-2 py-1 shadow-sm">
      <div className="flex items-center justify-start gap-2">
        <BookOpenIcon className={`h-4 w-4 ${obj.color}`} />
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
