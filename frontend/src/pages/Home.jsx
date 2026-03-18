import { useDispatch, useSelector } from "react-redux";
import BooksEnd from "../Components/BooksEnd";
import PlayBook from "../Components/PlayBook";
import SideNavigation from "../Components/SideNavigation";
import BookTitles from "../HomeComponent/BookTitles";
import Cards from "../HomeComponent/Cards";
import Heading from "../HomeComponent/Heading";
import Navigation from "../HomeComponent/Navigation";
import TopAuthors from "../HomeComponent/TopAuthors";
import Footer from "../Components/Footer";
import Chat from "../Chat_Assitant/Chat";
import ChatApp from "../Chat_Assitant/ChatApp";
import { api, api2 } from "../Axios/api";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { setBooks } from "../store/Feautures/HomeCards";
import AuthorCard from "../Authors/AuthorCard";
import { topAuthors } from "../HomeComponent/TopAuthorName";

// import {json} from 'react-router-dom';

function Home() {
  const { sidenav } = useSelector((state) => state.navigation);
  const { category, books, query , sortBy} = useSelector((state) => state.homecards);
  const { getbooks, authors } = useLoaderData();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchbyCategory() {
  //     try {
  //       const { data } = await api.get(`/subjects/${category}.json`, {
  //         params: { limit: 50 },
  //       });
  //       dispatch(setBooks(data.works));
  //     } catch (error) {
  //       throw new Response(JSON.stringify(error?.message), { status: 404 });
  //     }
  //   }
  //   if (!category) return;
  //   fetchbyCategory();
  // }, [category, dispatch]);

  console.log("category change" , category, query, "inputs")

  return (
    <div
      div
      className="w-full grid-cols-3 justify-items-center gap-4 p-4 lg:grid xl:grid-cols-4"
    >
      <div className="w-full lg:order-2 lg:col-span-2">
        <Navigation />
        <Heading />
        <BookTitles />
        {!category && !query && !sortBy ? (
          <Suspense fallback={<LoaderBook/>}>
            <Cards docs={getbooks} />
          </Suspense>
        ) : (
          <AuthorCard books={books} />
        )}

        {/* <Suspense fallback={<p>Authors are loading</p>}>
          <TopAuthors authors={authors} />
        </Suspense> */}
        <TopAuthors authors={topAuthors} />
      </div>

      {sidenav && (
        <div className="lg:order-1 lg:col-span-1">
          <SideNavigation />
        </div>
      )}

      <div className="mt-10 max-h-fit w-full min-w-0 justify-self-center rounded-sm bg-green-200/20 py-5 pl-4 lg:order-3 lg:col-span-3 lg:pr-3 xl:col-span-1 xl:mt-0">
        <BooksEnd />
      </div>
      {/* <Chat /> */}
      {/* <ChatApp /> */}
    </div>
  );
}

export async function LoaderBook() {
  try {
    const response = await api2.get("/books", {
      params: {
        search: "pro",
        // topic: "programming",
        page: 1,
        // limit: 100,
        languages: "en,fr",
        // mime_type="text/plain",
      },
    });
    return response;
  } catch (error) {
    throw new Response(
      JSON.stringify(error?.message || "Error fetching the books"),
      { status: 404 },
    );
  }
}

// export async function GetTopAuthors() {
//   try {
//     const { data } = await api.get("/search/authors.json", {
//       params: { q: "b", limit: 200 },
//     });
//     const topAuthors = data.docs
//       .sort((a, b) => b.work_count - a.work_count)
//       .slice(0, 10);
//     return topAuthors;
//   } catch (error) {
//     throw new Response(
//       JSON.stringify(error?.message || "Error fetching authors"),
//       { status: 400 },
//     );
//   }
// }

export async function LoaderBooks() {
  return {
    getbooks: LoaderBook(),
    // authors: GetTopAuthors(),
  };
}

export default Home;
