import { useEffect } from "react";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import LoadingCard from "../Components/LoadingCard";
import { setBooks, setBooksLoading } from "../store/Feautures/HomeCards";

function AuthorCard({ books }) {
  console.log("ready books", books);
  const { booksLoading, sortBy, search, query } = useSelector(
    (state) => state.homecards,
  );

  const dispatch = useDispatch();
  // const { items } = books; 
  // // console.log(items);
 


  //simulate loading , I may change it before deployment 
  useEffect(()=>{
    setTimeout(()=> {
      dispatch(setBooksLoading(false))
    }, 3000)
  })



  useEffect(() => {
    function SortedBooks() {
      console.log("hello start effetc");
      let sortedBooks = [];
      if (sortBy === "a-z") {
        sortedBooks = [...books].sort((a, b) =>
          (a.title || a.volumeInfo.title).localeCompare(
            b.title || b.volumeInfo.title,
          ),
        );
      }
      else if (sortBy === "z-a") {
        sortedBooks = [...books].sort((a, b) => b.title.localeCompare(a.title));
        console.log("z-a output", books, sortedBooks);
      }
      else if (sortBy === "downloads") {
        sortedBooks = [...books].sort(
          (a, b) => a.download_count - b.download_count,
        );
      }
      else if (sortBy === "birth") {

        const bookswithBirthYear = [...books].filter((book, index)=> book.authors && book.authors.length > 0 && book.authors.birth_year !==null); 

        const booksWithoutBirthYear = [...books].filter((book, index)=> !book.authors || !book.authors.length > 0 || !book.authors.birth_year)

        const sortBooksWithBirthYear = [...bookswithBirthYear].sort((a, b)=> a.authors[0].birth_year - b.authors[0].birth_year)

        sortedBooks = [...sortBooksWithBirthYear, ...booksWithoutBirthYear]; 

         console.log('all sorted books', sortedBooks)

        // dispatch(setBooks(sortedBooks))
        

      }
      else if (sortBy === "death") {
 

        //filter books with authors; 
        console.log('inital books', books); 
        const booksWithAuthors = [...books].filter((book, index)=> book.authors && book.authors.length > 0 && book.authors.death_year !== null)

        console.log('bookswithAuthor', booksWithAuthors)

        //filter out books without  authors; 
        const booksWithoutAuthors = [...books].filter((book, index)=> !book.authors || !book.authors.length>0 && !book.authors.death_year )

        //only sort books with authors; 
         console.log('bookswithoutAuthor', booksWithoutAuthors)

        const sortedbooksWithAuthors = [...booksWithAuthors].sort((a,b)=> a.authors[0].death_year - b.authors[0].death_year); 

         console.log('sortedbooksWithAuthors', sortedbooksWithAuthors)

        //combine sortedbooksWithAuthors and bookswithoutAuthors

         sortedBooks = [...sortedbooksWithAuthors, ...booksWithoutAuthors]; 
        console.log('all sorted books', sortedBooks)

        //updating the books container
        // dispatch(setBooks(sortedBooks))


      }

      else if(sortBy === "paid"){sortedBooks = [...books].filter((book, index, array)=> {

        //finding paid items 
        console.log("initial books", books); 
        const booksWithPaid = [...books].filter((book, index)=> book.download_count  && book.download_count > 10000 );
        
        console.log('paid books',booksWithPaid); 

        const freeBooks = [...books].filter((book,index )=> book.download_count <= 70000)

         console.log('freebooks',freeBooks); 

        sortedBooks = [...booksWithPaid, ...freeBooks].filter((book, index, array)=>index === array.findIndex(o=> o.id === book.id) )
        
        console.log('sorted books', sortedBooks); 
           return   dispatch(setBooks(sortedBooks))

        
      })}
      // if (sortBy === 'paid') return
      // dispatch(setBooks(sortedBooks))

      // console.log("reframe books", books, sortedBooks);
      if(sortBy === 'paid') return; 
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
