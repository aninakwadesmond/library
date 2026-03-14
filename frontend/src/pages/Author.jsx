import AuthorBooks from "../Authors/AuthorBooks";
import { api, apiAuthor } from "../Axios/api";

function Author() {
  console.log("hello author mounted");
  return (
    <div className="w-full">
      <AuthorBooks />
    </div>
  );
}

export async function LoadAuthorBooks({ params }) {
  const { name } = params;
  console.log("authors name", name);

  try {
    const { data } = await apiAuthor.get(
      `/?q=inauthor:${name}&maxResults=40&startIndex=0`,
    );
    const BookswithCoverImages = data.items.filter(
      (book) => book.volumeInfo.imageLinks,
    );
    console.log("your author data from author is ", BookswithCoverImages);
    // const { items } = data;
    return BookswithCoverImages;
  } catch (error) {
    throw new Response(
      JSON.stringify(error?.message || "Error fetching authors book", {
        status: 404,
      }),
    );
  }
}

export default Author;
