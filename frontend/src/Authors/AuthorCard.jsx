import { useEffect } from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import LoadingCard from "../Components/LoadingCard";
import { setBooks } from "../store/Feautures/HomeCards";

function AuthorCard({ books }) {
  console.log("ready books", books);
  const { booksLoading, sortBy, search } = useSelector(
    (state) => state.homecards,
  );
  console.log(";on we go", sortBy, booksLoading);
  const dispatch = useDispatch();
  // const { items } = books;
  // console.log(items);

  useEffect(() => {
    function SortedBooks() {
      console.log("hello start effetc");
      let sortedBooks = [];
      if (sortBy === "a-z") {
        sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
      }
      if (sortBy === "z-a") {
        sortedBooks = [...books].sort((a, b) => b.title.localeCompare(a.title));
        console.log("z-a output", books, sortedBooks);
      }
      if (sortBy === "downloads") {
        sortedBooks = [...books].sort(
          (a, b) => a.download_count - b.dowmload_count,
        );
      }
      if (sortBy === "birth") {
        sortedBooks = [...books].sort(
          (a, b) => a.authors[0]["birth_year"] - b.authors[0]["birth_year"],
        );
      }
      if (sortBy === "death") {
        sortedBooks = [...books].sort(
          (a, b) => a.authors[0]["death_year"] - b.authors[0]["death_year"],
        );
      }

      console.log("reframe books", books, sortedBooks);
      console.log("shuffle sort", sortedBooks);
      dispatch(setBooks(sortedBooks));
    }
    SortedBooks();
  }, [sortBy, search]);

  console.log("hello end");

  return (
    <div className="mt-10 grid w-full grid-cols-2 items-start justify-items-center gap-4 space-y-5 md:grid-cols-3 lg:grid-cols-4 lg:space-y-0">
      {booksLoading
        ? Array.from({ length: 10 }, (_, i) => i).map((key) => (
            <LoadingCard key={key} />
          ))
        : books.map((book) => <Card cardContent={book} selling={false} />)}
    </div>
  );
}

export default AuthorCard;
