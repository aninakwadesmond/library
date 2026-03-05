import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
} from "@heroicons/react/24/solid";

function PlayBook() {
  return (
    <div className="flex w-8/9 flex-col items-start justify-center gap-4 rounded-md bg-slate-50 p-3 shadow-lg shadow-gray-950/5">
      <Books />
      <Controls />
    </div>
  );
}

function Books() {
  return (
    <div className="flex w-full flex-nowrap items-center justify-start gap-2">
      <BookImage />
      <BookImage />
      <BookImage />
    </div>
  );
}

function BookImage() {
  return (
    <div className="flex h-20 w-1/3 flex-col items-center justify-center rounded-md bg-emerald-200/20 shadow shadow-emerald-100/70">
      <img
        src="/designs/book.jpg"
        alt="book image"
        className="max-h-full max-w-[90%] rounded-md"
      />
    </div>
  );
}

function Controls() {
  return (
    <div className="mt-1 flex w-full flex-col items-center justify-center gap-2">
      <p className="line-clamp-1 w-full text-center font-semibold text-gray-950/50">
        My only holy office
      </p>
      <div className="h-1 w-2/3 rounded-full bg-emerald-50">
        <div className="h-full w-1/6 rounded-full bg-emerald-500"></div>
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        <BackwardIcon className="w-6 text-green-300" />
        <PauseCircleIcon className="w-6 text-green-400" />
        <ForwardIcon className="w-6 text-emerald-300" />
      </div>
    </div>
  );
}
export default PlayBook;
