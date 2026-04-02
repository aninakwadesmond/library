import { use, useEffect } from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../store/Feautures/HomeCards";

function Cards({ docs = [] }) {
  const { data } = use(docs);
  console.log('books', data, docs)
  const books = data
  console.log("current books", books);
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.homecards);

  useEffect(()=> {
    console.log('allboks', books)
    dispatch(setBooks(books)); 
  }, [])

  // useEffect(() => {
  //   let sortedBooks = [];
  //   if (sortBy === "a-z") {
  //     sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
  //   }
  //   if (sortBy === "z-a") {
  //     sortedBooks = [...books].sort((a, b) => b.title.localeCompare(a.title));
  //     console.log("z-a output", books, sortedBooks);
  //   }
  //   if (sortBy === "downloads") {
  //     sortedBooks = [...books].sort(
  //       (a, b) => a.download_count - b.dowmload_count,
  //     );
  //   }
  //   if (sortBy === "birth") {
  //     sortedBooks = [...books].sort(
  //       (a, b) => a.authors[0]["birth_year"] - b.authors[0]["birth_year"],
  //     );
  //   }
  //   if (sortBy === "death") {
  //     sortedBooks = [...books].sort(
  //       (a, b) =>{ 
  //         console.log('your author death_year', a.authors[0].birth_year, b.authors[0], b.authors[0].birth_year, b.authors[0]['birth_year'])
  //       return  a.authors[0]["death_year"] - b.authors[0]["death_year"]}
  //     );
  //   }
  //   if(sortBy === 'paid'){
  //     sortedBooks = [...books].filter((obj, book, index)=> !book.copyright )

  //     console.log('sortedbooks', sortedBooks)

  //   }

  //   console.log("shuffle sort", sortedBooks);
  //   dispatch(setBooks(sortedBooks));
  // }, [sortBy]);
  // const freedocs = books.filter((book) => {
  //   book.ebook_access
  //     ? book.ebook_access === "public" && book.has_fulltext === true
  //     : book.availability?.is_readable === true && book.has_fulltext == true;
  // });

  // const borrowableBooks = books.filter((book) =>
  //   book.ebook_access
  //     ? book.ebook_access === "borrowable" && book.has_fulltext === true
  //     : book.availability?.available_to_borrow === true &&
  //       book.has_fulltext === true,
  // );

  return (
    <div className="mt-10 grid grid-cols-2 items-start justify-items-center gap-4 space-y-5 md:grid-cols-3 lg:grid-cols-4 lg:space-y-0">
      {books.map((cardContent) => (
        <Card cardContent={cardContent} selling={false} />
      ))}
      {/* {borrowableBooks.slice(1, 15).map((book) => (
        <Card cardContent={book} />
      ))} */}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default Cards;
