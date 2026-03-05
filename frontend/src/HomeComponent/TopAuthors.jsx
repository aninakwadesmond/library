import {
  BookmarkSlashIcon,
  BookOpenIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
// import BooksEnd from "../Components/BooksEnd";

const authors = [
  "Markus zukus",
  "Dan Brown",
  "John Green",
  "Markus zukus",
  "Dan Brown",
];

function TopAuthors() {
  return (
    <div className="mt-10 flex w-full flex-col items-start justify-start gap-4">
      <div className="flex items-center justify-center gap-6">
        <h3 className="text-sm font-bold tracking-normal text-gray-700 capitalize">
          Top Author
        </h3>
        <Link to="" className="font-semibold tracking-tight text-green-500">
          View all
        </Link>
      </div>

      <div className="flex w-90 overflow-x-auto p-2 md:w-160">
        <div className="flex w-max items-center justify-start gap-6">
          {authors.map((name) => (
            <Author name={name} />
          ))}
        </div>
      </div>
      <div className="mt-5 grid w-full grid-cols-3 gap-2">
        {/* <More /> */}
        <More count={20} text="Read books" />
        <More count={20} text="Authors" />
        <More count={3} text="Reading books" />
      </div>
    </div>
  );
}

function More({ count, text }) {
  return (
    <div className="flex w-[80%] items-center justify-start gap-6 rounded-md p-2 shadow">
      <div className="flex h-13 w-13 items-center justify-center rounded-md bg-orange-200 p-1 shadow shadow-orange-300/50">
        {/* <FaceSmileIcon className="h-1/2 w-1/2 text-orange-400" /> */}
        <img src="designs/book.jpg" alt="" className="h-8/10 w-8/10" />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <h3 className="text-[14px] font-bold tracking-normal text-gray-500">
          {count < 10 ? `0${count}` : count}
        </h3>
        <p className="line-clamp-1 text-[12px] font-semibold tracking-tight text-gray-300">
          {text}
        </p>
      </div>
    </div>
  );
}

function Author({ name }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="h-15 w-15 rounded-full border-[1.5px] border-green-400 p-[2px]">
        <img
          src="/designs/book.jpg"
          alt="bok"
          className="h-full w-full rounded-full"
        />
      </div>
      <p className="line-clamp-1 text-[10px] font-bold tracking-tight text-gray-400 capitalize">
        {name}
      </p>
    </div>
  );
}

export default TopAuthors;
