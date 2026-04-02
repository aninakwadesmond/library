import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useContext } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SwipeContext from "../Context/SwipeContext";

function SlideButton() {
  const { isBeginning, isEnd } = useContext(SwipeContext);
  // console.log("from swiper", isBeginning, isEnd);
  const swiper = useSwiper();
  return (
    <div className="flex-between left[2%] absolute top-[50%] z-20 w-full -translate-y-[50%] [&_button]:cursor-pointer">
      <button
        onClick={() => swiper.slidePrev()}
        className="flex-placecenter h-7 w-7 rounded-full bg-orange-100/50 shadow-md transition duration-400 hover:bg-orange-300 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isBeginning}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-md font-bold text-gray-950"
        />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="flex-placecenter h-7 w-7 rounded-full bg-orange-100/50 shadow-md transition duration-400 hover:bg-orange-300 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isEnd}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-md font-bold text-gray-950"
        />
      </button>
    </div>
  );
}

export default SlideButton;
