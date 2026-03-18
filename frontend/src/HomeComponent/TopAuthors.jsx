import {
  BookmarkSlashIcon,
  BookOpenIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import Swipe from "../Swipers/Swiper";
import { SwiperSlide } from "swiper/react";
import { use } from "react";
import { useDispatch } from "react-redux";
import { setAuhtorName } from "../store/Feautures/AuthorSlide";
// import BooksEnd from "../Components/BooksEnd";

const FakeAuthors = [
  "Markus zukus",
  "Dan Brown",
  "John Green",
  "Markus zukus",
  "Dan Brown",
  "Markus zukus",
  "Dan Brown",
  "John Green",
  "Markus zukus",
  "Dan Brown",
  "Markus zukus",
  "Dan Brown",
  "John Green",
  "Markus zukus",
  "Dan Brown",
  "Markus zukus",
  "Dan Brown",
  "John Green",
  "Markus zukus",
  "Dan Brown",
];

function TopAuthors({ authors = [] }) {
  // const authors = use(authors);
  console.log("all authors", authors);
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

      <div className="flex h-40 w-full">
        <div className="thin-scrollbar flex w-full cursor-pointer items-center justify-start gap-6">
          <Swipe>
            {authors.map((authorName) => (
              <SwiperSlide>
                <Author authorName={authorName} />
              </SwiperSlide>
            ))}
          </Swipe>
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

function Author({ authorName }) {
  // console.log(key, name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //set author's name

  function handleSetAuthorName() {
    dispatch(setAuhtorName(authorName));
    // navigate(`/author/${name}`);
  }

  return (
    <Link
      to={`/author/${authorName}`}
      // to={`/author/${key}`}
      onClick={handleSetAuthorName}
      className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 pb-5"
    >
      <div className="h-15 w-15 rounded-full border-[1.5px] border-green-400 p-[2px]">
        <img
          // src={`https://covers.openlibrary.org/a/olid/${key}-L.jpg?default=false`}
          src={`https://robohash.org/${authorName}.png`}
          onError={(e) =>
            (e.target.src = `https://ui-avatars.com/api/?name=${authorName}`)
          }
          alt="bok"
          className="h-full w-full rounded-full"
        />
      </div>
      <p className="line-clamp-1 text-[10px] font-bold tracking-tight text-gray-400 capitalize">
        {authorName}
      </p>
    </Link>
  );
}

export default TopAuthors;
