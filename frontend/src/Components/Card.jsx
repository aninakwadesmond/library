import { faHeart, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faBasketShopping,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { setCurrentBook } from "../store/Feautures/Details";
import { setCurrentHeading } from "../store/Feautures/HomeCards";
import { setCartItems } from "../store/Feautures/CartSlice";
import { useState } from "react";
import { server } from "../Axios/api";

function Card({ selling = true, cardContent = {} }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { currentBook } = useSelector((state) => state.details);

  // console.log("current book", currentBook);

  const {
    // cover_i = "",
    // author_name = "",
    // cover_id = "",
    volumeInfo = [],
    // title = "",
    // key = "",
    image='', 
    title = "",
    id,
    authors = [],
    formats = {},
    copyright="", 
    download_count = "",
  } = cardContent;

  console.log('images', image)
  console.log(formats);

  const [addtoCart, setAddtoCart] = useState(false); 

  function handleSetCurrentBook() {

    dispatch(setCurrentBook(cardContent));
    dispatch(setCurrentHeading(title));
    console.log("done setting current book");
    navigate(`/details/${id}`);
  }

  function handleAddItemsToCart(event){
    event.preventDefault(); 
    // dispatch(setCartItems(cardContent))
    dispatch(setCartItems({...cardContent, quantity:1, amountByQuantity:(((cardContent.download_count /1000)*2)||10 ).toFixed(2) *1}))
  }
  return (
    <div
      
      className="flex w-40 cursor-pointer flex-col items-start justify-center "
    >
      <div className="relative flex h-40 w-full flex-col items-center justify-center rounded-md bg-gray-400/30" onClick={handleSetCurrentBook}>
        <div className="max-h-[90%] w-[70%] rounded-md bg-slate-600">
          <img
            // src={`https://covers.openlibrary.org/b/id/${cover_i || cover_id || key.split("/").pop()}-M.jpg`}
            src={`${image || formats["image/jpeg"] || volumeInfo.imageLinks?.thumbnail}?default=false`}
            onError={(e) => (e.target.src = "/images/image-0.jpg")}
            alt="images"
            className="h-full w-full rounded-md"
          />
        </div>
        {/* <span className="absolute top-[5%] right-[5%] rounded-md bg-slate-400 px-2">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[12px] font-semibold text-red-400"
          />
        </span> */}
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <h3 className="line-clamp-1 text-[14px] font-semibold tracking-tight text-gray-900/70 capitalize">
          {/* {author_name || authors[0]["name"] || title} */}
          {/* {authors[0]["name"]} */}
          {title || volumeInfo.title}
        </h3>
        <div className="flex-between w-full gap-2">
          <StarIcon className="w-3 text-orange-400" />
          <span className="text-semibold text gray-400 text-[11px] font-semibold text-gray-400">
            <FontAwesomeIcon
              icon={faDownload}
              className="text-sm font-semibold text-gray-300"
            />
            {download_count || volumeInfo.pageCount} downloads
          </span>
        </div>
        {/* {selling && } */}
        {/* <p className="text-[14px] font-bold tracking-wide text-gray-950/70">
          32.00 USD
        </p> */}
      </div>
      { download_count > 10000 ? (
        <div className="flex-col-start w-full gap-1">
          <p className="text-[14px] font-bold tracking-wide text-gray-950/70">
            {`₵${Math.floor((download_count /100))||10 }.00`}
          </p>
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-200 p-1 cursor-pointer" onClick={e=> handleAddItemsToCart(e)}>
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="text-[10px] text-blue-500"
            />
            <span className="text-[12px] font-semibold tracking-tight text-blue-500">
              Add to cart
            </span>
          </button>
        </div>
      ) : 
        <PagesLike volumeInfo={volumeInfo} />
      }
    </div>
  );
}

function PagesLike({ volumeInfo }) {
  console.log(volumeInfo, volumeInfo.averageRating);
  return (
    <div className="flex-between w-full">
      <div className="flex-start gap-1">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="text-sm font-bold text-gray-500"
        />
        <span className="text-sm font-semibold tracking-tight text-gray-500">
          {/* {volumeInfo.averageRating || 2} */}
          {(volumeInfo.averageRating / 5) * 100 || 23}%
        </span>
      </div>
      <p className="text-[13px] font-semibold tracking-normal text-gray-500">
        {volumeInfo.pageCount || 467} pages
      </p>
    </div>
  );
}


// async function LoadOrderArrary(){
//   try {
//     const response = await server.get('/order/me'); 
//     return response; 
//   } catch (error) {
//     throw new Response(JSON.stringify(error || error?.message, {status:400}))
//   }
// }

// export async function LoadOrdersArrary(){
//   return {
//     orders:LoadOrderArrary()
//   }
// }

export default Card;
