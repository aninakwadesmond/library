import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Card({ id = 1 }) {
  return (
    <Link
      to={`/details/${id}`}
      className="flex w-40 flex-col items-start justify-center"
    >
      <div className="relative flex h-40 w-full flex-col items-center justify-center rounded-md bg-gray-400/30">
        <div className="max-h-[80%] w-[50%] rounded-md bg-slate-600">
          <img
            src="/designs/cart.png"
            alt="images"
            className="h-full w-full rounded-md"
          />
        </div>
        <span className="absolute top-[5%] right-[5%] rounded-md bg-slate-400 px-2">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[12px] font-semibold text-red-400"
          />
        </span>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h3 className="line-clamp-1 text-[14px] font-semibold tracking-tight text-gray-900/70 capitalize">
          John varrvatos star usa contract
        </h3>
        <div className="flex items-center justify-start gap-2">
          <StarIcon className="w-3 text-orange-400" />
          <span className="text-semibold text gray-400 text-[12px] font-semibold text-gray-400">
            4.5 (1332 reviews)
          </span>
        </div>
        <p className="text-[14px] font-bold tracking-wide text-gray-950/70">
          32.00 USD
        </p>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-200 p-1">
        <FontAwesomeIcon
          icon={faBasketShopping}
          className="text-[10px] text-blue-500"
        />
        <span className="text-[12px] font-semibold tracking-tight text-blue-500">
          Add to cart
        </span>
      </button>
    </Link>
  );
}

export default Card;
