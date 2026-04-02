import axios from "axios";
import AuthorBooks from "../Authors/AuthorBooks";
import { api, api2, apiAuthor, server } from "../Axios/api";
import { useActionData, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import LoadingCard from "../Components/LoadingCard";

function Author() {
  console.log("hello author mounted");
  const { authorBooks } = useLoaderData();
  // const response = useActionData(); 
  console.log("mounted results", authorBooks);
  return (
    <Suspense fallback={<div className="w-screen max-h-[1/2] grid grid-cols-2 items-center justify-items-center gap-4 mt-5">
      {Array.from({length: 6}, (_, i)=> <LoadingCard/>)}
    </div>}>


    <div className="w-full">
      <AuthorBooks  authorBooks={ authorBooks}/>
    </div>
    </Suspense>
  );
}

// export async function LoadAuthorBooks({ params }) {
//   const { name } = params;
//   console.log("authors nameeeeeeeeeeeeeeeeeeeeee", name);

//   try {
//     console.log("dataaaaa loading11", name);
//     const { data } = await api2.get(`/books?search=${name}`);
//     console.log("dataaaaa loading", data);
//     // const url = `https://gutendex.com/books?search=${query}`;
//     // const BookswithCoverImages = data.items.filter(
//     //   (book) => book.volumeInfo.imageLinks,
//     // );

//     const BookswithCoverImages = data;
//     console.log(
//       "your author data from author isssssssssssssssss ",
//       BookswithCoverImages,
//     );
//     return BookswithCoverImages;
//   } catch (error) {
//     throw new Response(
//       JSON.stringify(error?.message || "Error fetching authors book", {
//         status: 404,
//       }),
//     );
//   }
// }

 async function LoadAuthorBook({ params }) {
  console.log('request started ')
  const { name } = params;
  console.log("name", name);
  try {
    console.log("hello");
    const response = await server.get(`/books/search?search=${name}`)
    console.log("hello from loader", response , response.data);
    // const BookswithCoverImages = data.results;
    return response; 
  } catch (error) {
    throw new Response(JSON.stringify(error.message));
  }
}

export async function LoadAuthorBooks(args){
  return {
    authorBooks : LoadAuthorBook(args)
  }
}

export async  function NavigatePages({request, params}){
  try {
    const data = await request.formData(); 
    const {page} = Object.fromEntries(data.entries())
  // console.log('your data', yourData); 
    const response = await server.get(`/books/search?page=${page}`)
    console.log("hello from response", response , response.data, 'pages = ', page);
    // // const BookswithCoverImages = data.results;
    return response; 
  } catch (error) {
    throw new Response(JSON.stringify(error.message));
  }
}

export default Author;
