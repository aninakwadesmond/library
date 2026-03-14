import { Swiper, SwiperSlide } from "swiper/react";

//importing swiper modules
import { Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";

// swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideButton from "./SlideButton";
import { useState } from "react";
import SwipeContext from "../Context/SwipeContext";
// import "swiper/css/autoplay";

function Swipe({ children }) {
  const [isBeginning, setBeginning] = useState();
  const [isEnd, setEnd] = useState();
  return (
    <SwipeContext.Provider value={{ isBeginning, isEnd }}>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        // navigation
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        grabCursor={true}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => {
          setBeginning(swiper.isBeginning);
          setEnd(swiper.isEnd);
          console.log(swiper, swiper.isBeginning, swiper.isEnd);
        }}
      >
        <SlideButton />

        {children}
      </Swiper>
    </SwipeContext.Provider>
  );
}

export default Swipe;
