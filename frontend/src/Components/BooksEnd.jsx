import { BookOpenIcon } from "@heroicons/react/24/solid";
import PlayBook from "./PlayBook";

function BooksEnd() {
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row xl:flex-col">
      <PlayBook />
      <NextBooks />
      <DailyWork />
    </div>
  );
}

function DailyWork() {
  return (
    <div className="justify-content flex w-8/9 flex-col items-start gap-2">
      <h2 className="font-bold tracking-wide text-gray-500 capitalize">
        Daily work
      </h2>
      <div className="flex w-full items-center justify-between rounded-md bg-white p-4 shadow shadow-green-200">
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="text-sm tracking-tight text-green-400">
            Books this week
          </p>
          <BookOpenIcon className="w-10 text-green-500" />
        </div>
        <div className="h-10 w-10 rounded-full border-2 border-green-100">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full border-2 border-green-400">
            <span className="font-bold text-green-500/50">3/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextBooks() {
  return (
    <div className="flex w-8/9 flex-col items-start justify-center gap-2">
      <h2 className="gap-2 font-bold tracking-wide text-gray-500 capitalize">
        Next Books
      </h2>
      <BooksHorizontalCard
        title="Fault in our star"
        author="john green"
        time="02:20:03"
        image="book"
      />
      <BooksHorizontalCard
        title="Never eat alone"
        author="kaitt ferratzi"
        time="02:20:03"
        image="book"
      />
      <BooksHorizontalCard
        title="the book thief"
        author="markus zukus"
        time="02:20:03"
        image="small-1"
      />
    </div>
  );
}

function BooksHorizontalCard({ title, author, time, image }) {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-white pr-1 shadow">
      <div className="flex items-center justify-start gap-2">
        <div className="h-15 w-3/8 rounded-sm bg-amber-200">
          <img
            src={`/designs/${image}.jpg`}
            alt={image}
            className="rounded- h-full w-full object-contain object-center"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="line-clamp-1 text-[12px] font-bold tracking-tight text-gray-900/60 capitalize">
            {title}
          </p>
          <p className="text-[10px] font-semibold text-gray-900/20 capitalize">
            {author}
          </p>
        </div>
      </div>
      <p className="text-[12px] font-semibold text-gray-900/50">{time}</p>
    </div>
  );
}
export default BooksEnd;
