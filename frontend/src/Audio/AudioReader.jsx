import {
  faArrowLeft,
  faBackward,
  faCommentDots,
  faForward,
  faListDots,
  faPause,
  faPlay,
  faRotateBack,
  faRotateForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { useSpeechReader } from "react-speech-reader";
import { setPlay } from "../store/Feautures/AudioSlice";
import {
  faDribbbleSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { use, useEffect, useRef, useState } from "react";

function AudioReader({ data: audioBook }) {
  const result = use(audioBook);
  console.log("audio book", audioBook, result);
  // console.log("books", audioBook);
  // const result = use(audioBook);
  // console.log("result before data", result);
  const navigate = useNavigate();
  if (!result || !result.data) {
    return navigate("/");
  }

  const { data } = result;
  console.log("resolved Promise", data);
  // const { speak, cancel, setPitch, setVoice, setRate, pause, resume } =
  //   useSpeechReader();

  // const wordIndexRef = useRef(0);

  const { currentBook } = useSelector((state) => state.details);

  const { title, authors, bookshelves, formats, id } = currentBook;

  // const { speak, cancel } = useSpeechSynthesis();
  // // const positionRef = useRef(0);
  // const { data } = useLoaderData();

  const { play } = useSelector((state) => state.audio);
  const dispatch = useDispatch();
  const play_pause_resume = [faPlay, faPause, faYoutube];

  //play /pause/ resume
  const utterrance = useRef(null);
  const [rate, setRate] = useState(1);
  const [position, setPosition] = useState(0);
  const synth = window.speechSynthesis;
  const [playing, setIsplaying] = useState();

  const positionRef = useRef(0);

  // Update ref whenever position changes
  useEffect(() => {
    positionRef.current = position;
    // dispatch(setPlay(""));
  }, [position]);

  useEffect(() => {
    dispatch(setPlay(""));
  }, []);

  // fix one
  const words = useRef([]);

  useEffect(() => {
    if (data) {
      words.current = data.split(/\s+/);
    }
  }, [data]);
  //forward or backward skip;
  // const words = useRef(data || data.split(/\s+/));

  function handlePlayPauseResume() {
    const icon = play === "" ? faPlay : play === "start" ? faPause : faYoutube;
    return icon;
  }

  console.log("button", data);

  //Play /Pause / Resume

  //   function playBegin() {
  //   utterrance.current = new SpeechSynthesisUtterance(data);
  //   ...
  // }

  function playBegin() {
    if (!data) return;

    synth.cancel();

    const remainingText = data.slice(positionRef.current); // start from current position

    utterrance.current = new SpeechSynthesisUtterance(remainingText);
    utterrance.current.rate = rate;

    utterrance.current.onboundary = (e) => {
      if (e.name === "word") {
        const globalPosition = positionRef.current + e.charIndex;
        positionRef.current = globalPosition;
        setPosition(globalPosition);
      }
    };

    // utterrance.current.onboundary = (e) => {
    //   if (e.name === "word") {
    //     wordIndexRef.current += 1; // ✅ track words
    //   }
    // };

    utterrance.current.onerror = () => {
      dispatch(setPlay(""));
    };

    synth.speak(utterrance.current);
  }
  // function playBegin() {
  //   // if (synth.speaking) {
  //   //   synth.cancel();
  //   // }
  //   // if (play === "") {
  // skip(-10);
  //   // }
  //   if (!data) return;
  //   synth.cancel();
  //   utterrance.current = new SpeechSynthesisUtterance(data);
  //   utterrance.current.rate = rate;
  //   utterrance.current.onboundary = (e) => {
  //     if (e.name == "word") {
  //       const newPosition = e.charIndex;
  //       setPosition(e.charIndex);
  //       positionRef.current = newPosition;
  //     }
  //   };

  //   utterrance.current.onerror = (event) => {
  //     console.error("Speech error:", event.error);
  //     setIsplaying(false);

  //     dispatch(setPlay("")); // Reset to play state
  //   };

  //   // Add small delay for iOS Safari
  //   setTimeout(() => {
  //     synth.speak(utterrance.current);
  //   }, 100);

  //   setIsplaying(true);
  // }

  function pause() {
    synth.pause();
  }

  function resume() {
    synth.resume();
  }
  function stop() {
    synth.cancel();
    setPosition(0);
  }

  function handleSetPlay() {
    if (play === "") {
      console.log("your data", data);
      dispatch(setPlay("start"));
      playBegin();
      // speak({ text: data });
    } else if (play === "start" || play === "resume") {
      dispatch(setPlay("pause"));
      // pause();
      pause();
    } else if (play === "pause") {
      dispatch(setPlay("resume"));
      console.log("your data3", data);
      // resume();
      resume();
    }
    // speak({ text: data });
  }

  //foward and backaward skip ;
  function skip(seconds) {
    if (!data || !words.current.length) return;

    //Approx: 3 words per second
    const wordsToSkip = Math.floor(seconds * 3);
    const currentWordIndex =
      data.slice(0, positionRef.current).split(/\s+/).length - 1;
    const newIndex = Math.max(
      0,
      Math.min(currentWordIndex + wordsToSkip, words.current.length - 1),
    );

    // wordIndexRef.current = newIndex; // ✅ sync progress after skip

    //ca;culate new Character posistion
    const newPosition = words.current.slice(0, newIndex).join(" ").length;

    //Update position ref immediately
    positionRef.current = newPosition;

    //getting remaining text
    const remainingText = words.current.slice(newIndex).join(" ");
    stop();

    //create new utterance with proper handlers
    utterrance.current = new SpeechSynthesisUtterance(remainingText);
    utterrance.current.rate = rate;

    //Reattach boundary evenet to track new Posistion
    utterrance.current.onboundary = (e) => {
      if (e.name === "word") {
        const globalPosition = newPosition + e.charIndex;
        positionRef.current = globalPosition;
        setPosition(globalPosition);
      }
      //calculate global posistion
    };

    // Add onend handler;
    // utterrance.current.onend = e=> {

    // }

    synth.speak(utterrance.current);
  }

  const [count, setProgres] = useState(0);
  const [currentTIme, setCurrentTime] = useState(0);
  //progress, currentTime, duration
  // function getProgress() {
  //   if (!words.current.length) return 0;
  //   const wordsSpoken = data.slice(0, positionRef.current).split(/\s+/).length;

  //   return (wordsSpoken / words.current.length) * 100;
  // }
  // function getProgress() {
  //   if (!words.current.length) return 0;
  //   return (wordIndexRef.current / words.current.length) * 100;
  // }

  function getProgress() {
    if (!words.current.length) return 0;

    const wordsSpoken = data
      .slice(0, positionRef.current)
      .split(/\s+/)
      .filter(Boolean).length;

    return (wordsSpoken / words.current.length) * 100;
  }

  // function getCurrentTime() {
  //   const wordsSpoken = data.slice(0, positionRef.current).split(/\s+/).length;
  //   // data
  //   //   .slice(0, positionRef.current)
  //   //   .trim()
  //   //   .split(/\s+/)
  //   //   .filter(Boolean).length;
  //   // console.log("object", wordsSpoken / 3 / rate);

  //   return wordsSpoken / 3 / rate;
  // }
  function getCurrentTime() {
    const wordsSpoken = data
      .slice(0, positionRef.current)
      .split(/\s+/)
      .filter(Boolean).length;

    return wordsSpoken / 3 / rate;
  }

  // function getCurrentTime() {
  //   return wordIndexRef.current / 3 / rate;
  // }

  function getDuration() {
    if (!words.current.length) return 0; // ✅
    return words.current.length / 3 / rate;
  }

  useEffect(() => {
    if (data) {
      words.current = data.split(/\s+/);
      // getDuration();
    }
  }, [data]);

  // useEffect(() => {
  //   const Id = setInterval(() => {
  //     const newProgress = getProgress();
  //     const newTIme = getCurrentTime();

  //     setProgres(newProgress);
  //     setCurrentTime(newTIme);

  //     console.log("counting......", count, currentTIme);
  //   }, 1000);
  //   return () => {
  //     clearInterval(Id);
  //   };
  // }, []);
  useEffect(() => {
    const Id = setInterval(() => {
      if (!data || !words.current.length) return;

      const wordsSpoken = data
        .slice(0, positionRef.current)
        .split(/\s+/).length;
      // .filter(Boolean).length;

      const progress = (wordsSpoken / words.current.length) * 100;

      const currentTime = wordsSpoken / 3 / rate;

      setProgres(progress);
      setCurrentTime(currentTime);
    }, 1000);

    return () => clearInterval(Id);
  }, [data, rate]);

  return (
    <div className="flex-placecenter h-[90%] w-full justify-between justify-start gap-y-1 px-6 py-4">
      <div className="flex-between w-full">
        <FaIcon icon={faArrowLeft} path={`/details/${id}`} />
        <p className="text-center text-[1.3rem] font-bold tracking-normal text-white capitalize">
          playing now
        </p>
        <FaIcon icon={faCommentDots} />
      </div>
      <div className="flex-placecenter md:w-[25-rem mt-4 h-[18rem] w-[20rem] rounded-[2rem] bg-linear-to-r from-gray-700 md:h-[23rem]">
        <div className="flex-placecenter h-[95%] w-[95%]">
          <img
            src={`${formats["image/jpeg"]}?default=false`}
            onError={(e) => (e.target.src = `/images/image-0.jpg`)}
            alt="reading bok image "
            className="h-full w-full rounded-[2rem] object-center"
          />
        </div>
      </div>
      <div className="gap-y3 flex w-full flex-col items-center justify-center gap-y-1">
        <span className="text-center text-[1rem] font-bold tracking-tight text-white/70">
          {`Author: ${authors["name"]}`}
        </span>
        <p className="line-clamp-3 max-w-[22rem] text-center font-charon text-[1.4rem] font-bold tracking-tight text-white">
          {title}
        </p>
        <span className="text-center text-sm text-[1rem] font-bold tracking-tight text-white/70">
          {`Category: ${bookshelves[0]?.split(":").pop() || "Novel"}`}
        </span>
      </div>
      <CurrentReadTimer
        currentTime={currentTIme}
        duration={getDuration()}
        progress={count}
      />
      <div className="flex-between mt-4 w-full">
        {/* <Controls icon={faBackward} />
        <Controls icon={faRotateBack} /> */}
        <Controls icon={faRotateBack} action={skip} skipCount={-20} />
        <Controls
          icon={
            play === ""
              ? faPlay
              : play === "start" || play === "resume"
                ? faPause
                : faPlay
          }
          active={true}
          action={handleSetPlay}
        />
        <Controls icon={faRotateForward} action={skip} skipCount={20} />
        {/* <Controls icon={faRotateForward} />
        <Controls icon={faForward} /> */}
      </div>
    </div>
  );
}

function CurrentReadTimer({ currentTime, duration, progress }) {
  console.log(
    "currentTiming",
    currentTime,
    "duration",
    duration,
    "progress",
    progress,
  );

  // const hours = time / 3600;
  // const minutes = (time / 60) % 60;
  // const seconds = time % 60;

  // return `${String(Math.floor(hours)).padStart(2, "0")}:${String(
  //   Math.floor(minutes)
  // ).padStart(2, "0")}:${String(Math.floor(seconds)).padStart(2, "0")}`;
  function Timer(time) {
    const hours = time / 3600;
    const minutes = (time / 60) % 60;
    const second = time % 60;
    const hourformat = `${hours < 10 ? `0${hours}` : `${hours}`}`;
    const minuteformat = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
    const secondsformat = `${second < 10 ? `0${second}` : `${second}`}`;

    // return `${Math.floor(hourformat)}:${Math.floor(minuteformat)}:${Math.floor(secondsformat)}`;
    return `${String(Math.floor(hours)).padStart(2, "0")}:${String(
      Math.floor(minutes),
    ).padStart(2, "0")}:${String(Math.floor(second)).padStart(2, "0")}`;

    // return `${hours < 10 ?`0${hours}`:`${hours}`
  }
  return (
    <div className="mt-3 w-full flex-col gap-1">
      <div className="h-3 w-full rounded-full bg-gray-500">
        <div
          className={`h-full rounded-full bg-orange`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex-between w-full">
        <span className="font-semibold tracking-tight text-gray-400">
          {Timer(currentTime)}
        </span>
        <span className="font-semibold tracking-tight text-gray-400">
          {Timer(duration)}
        </span>
      </div>
    </div>
  );
}

function Controls({ icon, active = false, action, skipCount = "" }) {
  // const { speak, cancel } = useSpeechSynthesis()
  const { speak, cancel, setPitch, setVoice, setRate, pause, resume } =
    useSpeechReader();

  const { play } = useSelector((state) => state.audio);
  const dispatch = useDispatch();

  // function handleSetPlay() {
  //   if (play === "") {
  //     dispatch(setPlay("start"));
  //     speak({ text: data });
  //   }
  //   if (play === "start") {
  //     dispatch(setPlay("pause"));
  //     pause();
  //   }
  //   if (play === "pause") {
  //     dispatch(setPlay("resume"));
  //     resume();
  //   }
  // }

  function handleCancel() {
    cancel();
  }
  const { data } = useLoaderData();
  return (
    <span
      className={`flex-placecenter h-10 w-10 cursor-pointer rounded-full transition-all duration-400 hover:bg-orange ${active ? `h-20 w-20 bg-orange shadow-md shadow-orange/30` : ""}`}
      onClick={() => {
        if (!action) return;
        active ? action() : action(skipCount);
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-md font-semibold text-white ${active ? "text-[1.6rem]" : ""}`}
      />
    </span>
  );
}

function FaIcon({ icon, path = "" }) {
  return (
    <Link
      to={path && path}
      className="flex-placecenter h-8 w-8 cursor-pointer rounded-full transition-all duration-400 hover:bg-orange"
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-md font-semibold text-white"
      />
    </Link>
  );
}

export default AudioReader;
