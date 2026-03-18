import axios from "axios";
import AuthorBooks from "../Authors/AuthorBooks";
import { api, api2, apiAuthor } from "../Axios/api";
import { useLoaderData } from "react-router-dom";

function Author() {
  console.log("hello author mounted");
  const { results } = useLoaderData();
  console.log("mounted results", results);
  return (
    <div className="w-full">
      <AuthorBooks />
    </div>
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

export async function LoadAuthorBooks({ params }) {
  const { name } = params;
  console.log("name", name);
  try {
    console.log("hello");
    const { data } = await axios.get(
      `https://gutendex.com/books?search=${name}`,
    );
    console.log("hello responseeee", data);
    // const BookswithCoverImages = data.results;
    return data;
  } catch (error) {
    throw new Response(JSON.stringify(error.message));
  }
}

export default Author;
