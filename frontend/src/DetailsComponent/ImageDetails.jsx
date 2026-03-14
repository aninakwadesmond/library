import {
  faBookmark,
  faCalendar,
  faEye,
  faFile,
  faStar,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBasketShopping,
  faBookOpen,
  faDownload,
  faMinus,
  faMoneyBill,
  faPlus,
  faShare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/24/solid";
import Cards from "../HomeComponent/Cards";
import Card from "../Components/Card";
import Button from "./Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { api2 } from "../Axios/api";
import { useNavigation } from "react-router-dom";
import LoadingCard from "../Components/LoadingCard";

function ImageDetails() {
  return (
    <div className="w-full px-3">
      <div className="flex w-full flex-col items-start justify-center gap-y-8 px-3 py-4 md:gap-3 lg:grid lg:grid-cols-7 lg:gap-6">
        <div className="w-full lg:col-span-4">
          <ImageGalary />
        </div>
        <div className="w-full lg:col-span-3">
          {/* <AboutDetails /> */}
          <AboutFreeDetails />
        </div>
      </div>
      <RelatedItems />
    </div>
  );
}

function AboutFreeDetails() {
  const { currentBook } = useSelector((state) => state.details);
  const { title = "", authors, bookshelves = [], summaries = [] } = currentBook;
  return (
    <div className="flex-col-start w-full gap-7 divide-y divide-gray-200">
      <div className="flex-col-start w-full gap-3 pb-4">
        <p className="md inline-block rounded bg-blue-400 px-2 py-1 text-sm font-semibold text-blue-100 uppercase shadow-md">
          ppt
        </p>
        <h2 className="line-clamp-2 text-2xl font-bold tracking-wide text-gray-600 capitalize">
          {title ? title : "Web development fundementals"}
        </h2>
        <div className="grid w-full grid-cols-2 items-start justify-items-start gap-x-2 gap-y-3">
          <About_Book
            icon={faUser}
            title="author"
            name={authors[0]["name"] || "Desmond"}
            // name={"Desmond"}
          />
          <About_Book
            icon={faFile}
            title="department"
            name={bookshelves[2].split(":").pop()}
          />
          <About_Book
            icon={faCalendar}
            title="upload date"
            name="Feb 20, 2026"
          />
          <About_Book icon={faBookOpen} title="pages" name="89" />
        </div>
      </div>
      <div className="flex-col-start w-full gap-6">
        <div className="flex-between w-full">
          <ViewerAnalysis icon={faThumbsUp} text={512} />
          <ViewerAnalysis icon={faEye} text="2,567 viewers" />
          <ViewerAnalysis icon={faShareNodes} text="Share" />
        </div>
        <div className="flex-col-start w-full gap-2">
          <h5 className="text-md font-bold tracking-normal text-gray-600 capitalize">
            Summary
          </h5>
          <p className="line-clamp-3 text-[12px] font-semibold tracking-tight text-gray-400">
            {summaries[0]}
          </p>
          <div className="flex-col-start w-full rounded-md bg-gray-200 px-4 py-2 shadow">
            <span className="text-[12px] font-semibold tracking-tight text-gray-500 capitalize">
              Course code: CS3434
            </span>
            <span className="text-[12px] font-semibold tracking-tight text-gray-500 capitalize">
              file size: 24MB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewerAnalysis({ icon, text }) {
  return (
    <div className="flex-start gap-1">
      <FontAwesomeIcon icon={icon} className="text-md text-gray-600" />
      <span className="text-md font-bold tracking-normal text-gray-600">
        {text}
      </span>
    </div>
  );
}

function About_Book({ icon, title, name }) {
  return (
    <div className="flex-start gap-2">
      <FontAwesomeIcon
        icon={icon}
        className="text-sm font-bold text-gray-400"
      />
      <div className="flex-col-start">
        <span className="text-[11px] font-semibold tracking-tight text-gray-300 capitalize">
          {title}
        </span>
        <p className="tracking-nromal text-sm font-bold text-gray-600 capitalize">
          {name}
        </p>
      </div>
    </div>
  );
}

function AboutDetails() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3">
      <div className="flex w-full flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center">
          <p className="text-[12px] font-semibold tracking-tight text-gray-400 capitalize">
            Jeff Bussy
          </p>
          <h2 className="text-[1.8rem] font-bold tracking-tight text-gray-700 capitalize">
            Boa Fierce Jacket
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-amber-100">
          <p className="font-semibold tracking-normal text-gray-500 line-through">
            $129.00
          </p>
          <p className="self-end text-[1.5rem] font-bold tracking-wide text-gray-900">
            $122.00
          </p>
          <span className="rounded-md bg-gray-950 p-1 px-2 text-center text-[12px] text-gray-300 shadow">
            5% Disc
          </span>
        </div>
        <div className="mt-2 flex items-center justify-start gap-2">
          <div className="flex items-center justify-start gap-2">
            {Array.from({ length: 5 }, (_, i) => (i = +1)).map((el) => (
              <StarIcon className="w-4 text-amber-200" />
            ))}
          </div>
          <p className="text-sm font-bold tracking-tight text-gray-400 capitalize">
            (4.9) 1.2K Revieews
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-[14px] font-bold tracking-tight text-gray-800 capitalize">
          Descriptions
        </h2>
        <p className="line-clamp-4 text-[11px] font-bold text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          incidunt quas delectus provident, doloremque culpa officiis corrupti
          sit unde adipisci omnis tempora. Reiciendis recusandae, similique
          voluptatibus numquam porro ullam voluptate. Minima sint deserunt
          facere. Corrupti similique inventore tempore, dolorum optio aspernatur
          sint nesciunt, ut quibusdam architecto suscipit nemo cupiditate illo
          doloribus, tempora voluptas recusandae et placeat aliquam. Fuga,
          molestiae asperiores. Commodi cumque earum nisi pariatur dolores
          repellendus iste, amet totam qui deserunt. Animi cum earum quae autem
          soluta cupiditate repudiandae repellendus. Distinctio laborum maxime
          fugiat provident expedita, quos sequi dignissimos?
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <p className="font-bold tracking-tight capitalize">Versions</p>
        <div className="flex items-center justify-start gap-2">
          <Version version="v1" />
          <Version version="v2" />
          <Version version="v3" />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <Increment_Decrement icon={faMinus} />
        <input
          type="number"
          className="shatracking-wide w-40 appearance-none rounded-md bg-amber-50 px-4 text-center text-[16px] font-bold tracking-wide text-gray-600 outline-0"
          placeholder="0"
          onWheel={(e) => e.target.blur()}
        />
        <Increment_Decrement icon={faPlus} />
      </div>
      <div className="flex w-full items-center justify-between gap-4">
        <Button_Cart
          icon={faBasketShopping}
          name="Add to cart"
          color="bg-amber-100"
        />
        <Button_Cart
          icon={faMoneyBill}
          name="checkout"
          color="bg-amber-500/30"
        />
      </div>
    </div>
  );
}

function RelatedItems() {
  const { currentHeading } = useSelector((state) => state.homecards);

  const related = currentHeading.split(" ").slice(0, 2).join(" ");

  const [relatedBooks, setRelatedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const navigation = useNavigation();

  // let isLoading = "";
  useEffect(() => {
    async function fetchRelatedData() {
      try {
        setIsLoading(false);
        const { data } = await api2(`/books?search=${related}`);
        console.log("this is the navigation state", navigation.state);

        console.log("data from useEffect", data);
        const { results } = data;
        setRelatedBooks(results.slice(0, 6));
        setIsLoading(true);
      } catch (error) {
        throw new Response(
          JSON.stringify(error?.message || "Error in fetching data "),
          { status: 404 },
        );
      }
    }
    fetchRelatedData();
  }, [currentHeading]);

  return (
    <div className="mt-10 flex w-full flex-col items-start justify-center gap-4">
      <p className="items-center justify-start font-bold tracking-normal text-gray-700">
        This item can be cool with this
      </p>
      <div className="grid w-full grid-cols-2 items-start justify-items-center gap-x-3 gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {!isLoading
          ? Array.from({ length: 6 }, (_, i) => i).map((el) => <LoadingCard />)
          : relatedBooks.map((book) => (
              <Card selling={false} cardContent={book} />
            ))}
        {/* {relatedBooks &&
          
          ))} */}

        {/* <Card /> */}
      </div>
    </div>
  );
}

function Button_Cart({ name, icon, color }) {
  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-1 shadow ${color}`}
    >
      <FontAwesomeIcon icon={icon} className="text-orange-300" />
      <span className="text-[16px] font-semibold text-gray-600">{name}</span>
    </button>
  );
}

function Increment_Decrement({ icon }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-orange-300 p-2 shadow">
      <FontAwesomeIcon
        icon={icon}
        className="text-[16px] font-bold text-gray-50"
      />
    </div>
  );
}

function Version({ version }) {
  return (
    <label className="flex cursor-pointer items-center justify-start gap-1 text-[11px] text-gray-500">
      <input type="radio" name="version" value={version} />
      <span className="text-[12px] font-bold text-gray-400">{version}</span>
    </label>
  );
}

function ImageGalary() {
  return (
    <div className="flex-col-start w-full gap-4">
      <div className="flex w-full flex-col gap-1 md:grid md:grid-cols-6 lg:gap-2">
        <div className="w-full md:order-2 md:col-span-5">
          <SingleImage height="h-80 md:h-90 lg:h-100 " />
        </div>
        <div className="grid grid-cols-4 gap-2 md:order-1 md:h-80 md:grid-cols-1">
          <SingleImage height="h-20" rounded="rounded-0" />
          <SingleImage height="h-20" rounded="rounded-0" />
          <SingleImage height="h-20" rounded="rounded-0" />
          <SingleImage height="h-20" rounded="rounded-0" />
        </div>
      </div>
      <div className="mt-3 grid w-full grid-cols-2 items-center justify-items-start gap-x-5 md:flex md:items-center md:justify-center md:gap-7">
        <Button
          icon={faDownload}
          text="download"
          text_style="text-blue-100 text-sm"
          bg_color="bg-blue-500"
        />
        <Button
          icon={faBookmark}
          text="bookmark"
          text_style="text-gray-600 text-sm"
          bg_color="bg-white"
        />
      </div>
    </div>
  );
}

function SingleImage({ height, rounded }) {
  const { currentBook } = useSelector((state) => state.details);

  const { formats = {} } = currentBook;
  return (
    <div
      className={`flex ${height} w-full flex-col items-center justify-center ${rounded ? rounded : "rounded-md"} bg-slate-200`}
    >
      <img
        src={`${formats["image/jpeg"]}?default=false`}
        onError={(e) => (e.target.src = "/designs/book.jpg")}
        alt="book image"
        className="h-[80%] max-w-[90%]"
      />
    </div>
  );
}
export default ImageDetails;
