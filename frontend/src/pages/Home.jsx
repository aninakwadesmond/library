import { useSelector } from "react-redux";
import BooksEnd from "../Components/BooksEnd";
import PlayBook from "../Components/PlayBook";
import SideNavigation from "../Components/SideNavigation";
import BookTitles from "../HomeComponent/BookTitles";
import Cards from "../HomeComponent/Cards";
import Heading from "../HomeComponent/Heading";
import Navigation from "../HomeComponent/Navigation";
import TopAuthors from "../HomeComponent/TopAuthors";

function Home() {
  const { sidenav } = useSelector((state) => state.navigation);
  return (
    <div
      div
      className="w-full grid-cols-3 justify-items-center gap-4 p-4 lg:grid xl:grid-cols-4"
    >
      <div className="min-w-0 lg:order-2 lg:col-span-2">
        <Navigation />
        <Heading />
        <BookTitles />
        <Cards />
        <TopAuthors />
      </div>

      {sidenav && (
        <div className="lg:order-1 lg:col-span-1">
          <SideNavigation />
        </div>
      )}

      <div className="mt-10 max-h-fit w-full min-w-0 justify-self-center rounded-sm bg-green-200/20 py-5 pl-4 lg:order-3 lg:col-span-3 lg:pr-3 xl:col-span-1 xl:mt-0">
        <BooksEnd />
      </div>
    </div>
  );
}

export default Home;
