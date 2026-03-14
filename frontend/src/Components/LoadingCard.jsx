import { faHeart, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/24/solid";

function LoadingCard() {
  return (
    <div className="flex w-40 cursor-pointer flex-col items-start justify-center">
      <div className="relative flex h-40 w-full animate-pulse flex-col items-center justify-center rounded-md bg-gray-400/30">
        <div className="max-h-[90%] w-[70%] rounded-md bg-slate-600"></div>
        {/* <span className="absolute top-[5%] right-[5%] rounded-md bg-slate-400 px-2">
          
        </span> */}
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <h3 className="line-clamp-1 animate-ping bg-gray-900/70 text-[14px] font-semibold tracking-tight capitalize"></h3>
        <div className="flex-between w-full gap-2">
          <StarIcon className="w-3 text-gray-400" />
          <span className="text-semibold text gray-400 w-6 animate-pulse rounded-md bg-gray-400 text-[11px] font-semibold">
            <FontAwesomeIcon
              icon={faDownload}
              className="animate-pulse text-sm font-semibold text-gray-300"
            />
          </span>
        </div>
        <PagesLike />
      </div>
    </div>
  );
}

function PagesLike() {
  return (
    <div className="flex-between w-full">
      <div className="flex-start gap-1">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="animate-bounce text-sm font-bold text-gray-500"
        />
        <span className="rounde-md h-2 w-10 animate-pulse bg-gray-500 text-sm font-semibold tracking-tight"></span>
      </div>
      <p className="h-2 w-15 animate-pulse rounded-md bg-gray-500 text-sm font-semibold tracking-normal"></p>
    </div>
  );
}

export default LoadingCard;
