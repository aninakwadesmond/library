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
import { api, api2, server } from "../Axios/api";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { setBooks } from "../store/Feautures/HomeCards";
import AuthorCard from "../Authors/AuthorCard";
import { topAuthors } from "../HomeComponent/TopAuthorName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { setChatHome, setChatRoom, setVerify } from "../store/Feautures/ChatSlice";
import ProtectedRoute from "../Components/ProtectedRoute";
import LoadingCard from "../Components/LoadingCard";
import { toast } from "react-toastify";

// import {json} from 'react-router-dom';

function Home() {
  const { sidenav } = useSelector((state) => state.navigation);
  const { category, books, query, sortBy } = useSelector(
    (state) => state.homecards,
  );
  const { getbooks, authors } = useLoaderData();

  const dispatch = useDispatch();

  console.log('books from server', getbooks)

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

  console.log("category change", category, query, "inputs");

  // const [openChat, setOpenChat]= useState(false)
  // const [openApp, setOpenApp]= useState(false)

  // const dispatch = useDispatch();

  const { chatHome, chatRoom, verify } = useSelector((state) => state.chat);
   const navigate = useNavigate()

      

  function handleOpenChatRoom() {
  
    if ((chatHome == false) & (chatRoom == true)) {
       
      dispatch(setChatHome(false));
      dispatch(setChatRoom(false));
      return;
    } else {
       window.scrollTo(0, 0)
      //  verifyUser(); 
      dispatch(setChatHome(true));
    }
  }

  return (
    <div
      div
      className="w-full grid-cols-3 justify-items-center gap-4 p-4 lg:grid xl:grid-cols-4"
    >
      <div className="xlg:order-1 xlg:col-span-1 w-full justify-self-start hidden xl:block" style={{display:`${sidenav ?'block':''}`}}>
          <SideNavigation />
        </div>
      <div className="w-full lg:order-2 lg:col-span-3 xl:col-span-2">
        <Navigation />
        <Heading />
        <BookTitles />
        {!category && !query && !sortBy ? (
          <Suspense  fallback={<div className="w-screen max-h-[1/2] grid grid-cols-2 items-center justify-items-center gap-4 mt-5">
                {Array.from({length: 6}, (_, i)=> <LoadingCard/>)}
              </div>}>
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

   
        


      <div className="mt-10 max-h-fit w-full min-w-0 justify-self-center rounded-sm py-5 pl-4 lg:order-3 lg:col-span-3 lg:pr-3 xl:col-span-1 xl:mt-0 px-2">
        <BooksEnd />
      </div>
      {/* <Chat/> */}

      {(chatHome || chatRoom) && ( <ProtectedRoute>
      {chatHome && verify &&  <Chat />}
      {chatRoom && <ChatApp />}
      </ProtectedRoute>)}
      {/* <ProtectedRoute>
      {chatHome && verify &&  <Chat />}
      {chatRoom && <ChatApp />}
      </ProtectedRoute> */}
      

      <div
        className="flex-placecenter gap-2 fixed right-[3%] bottom-[10%] z-40 h-10 w-10 cursor-pointer rounded-full bg-blue-200 p-3 shadow-md "
        onClick={handleOpenChatRoom}
      >
        <FontAwesomeIcon
          icon={faMessage}
          className="translate-y-1 animate-bounce text-[1.5rem] text-blue-700"
        />
        {/* <span className="text-md font-semibold text-gray-600 tracking-tight">AI </span> */}
      </div>
    </div>
  );
}

export async function LoaderBook() {
  try {
    const response = await server.get('/books'); 
    return response
  } catch (error) {
    throw new Response(JSON.stringify(error || error?.message), {status:404})
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
