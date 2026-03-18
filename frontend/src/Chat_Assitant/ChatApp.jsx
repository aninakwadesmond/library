import {
  faArrowDown,
  faArrowLeft,
  faBookOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { setChatHome, setChatRoom } from "../store/Feautures/ChatSlice";

function ChatApp() {
  const dispatch = useDispatch()
   function handleGoBackHome(){
  dispatch(setChatRoom(false)); 
  dispatch(setChatHome())
 }

 function handleDropChat(){
    dispatch(setChatRoom(false)); 
  dispatch(setChatHome())
 }
  return (
    <>
     <div className="w-full absolute w-screen bg-blue-200/50 h-full top-0 bottom-0 left-0 right-0"> 
      </div>
   
    <div className="absolute top-[1%] right-[5%] z-10 h-130 w-[90%] rounded-md bg-mist-50 shadow-lg md:w-100">
      <div className="flex-between w-full rounded-t-md bg-linear-to-l from-blue-700 to-blue-400 px-2 py-5">
        <div className="flex-start gap-3">
          <span className="flex-placecenter h-6 w-6 cursor-pointer" onClick={handleGoBackHome}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-lg font-bold text-gray-950"
            />
          </span>
          <div className="flex-start gap-1">
            <p className="capiptalize font-bold tracking-tight text-gray-600">
              LibRoom
            </p>
            <FontAwesomeIcon icon={faBookOpen} className="text-md text-white" />
          </div>
          <p className="text-lg font-bold tracking-tight text-gray-700 capitalize">
            Chat Support
          </p>
        </div>
        <span className="flex-placecenter h-7 w-7 cursor-pointer" onClick={handleGoBackHome}>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-md text-gray-900"
          />
        </span>
      </div>
      <ChatContent />
      <TextArea />
    </div>
     </>
  );
}

function ChatContent() {
  return (
    <div className="flex h-90 w-full overflow-hidden bg-white">
      <div className="flex-col-start thin-y-scrollbar w-full justify-start gap-4 overflow-auto px-2 py-4">
        <ChatText text="🤣Hi,There I'm Libroom Assistant. How can I help You Today" />
        <ChatText user={true} text="what is synopsis ?" />
        <ChatText text="Synposis is in the neural, helps link neuron communicate" />
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="flex-between mt-2 w-full gap-3 px-3">
      <textarea
        name="textarea"
        id=""
        className="text-md s thin-y-scrollbar h-18 w-[87%] resize-none rounded-md border-0 bg-white p-2 font-semibold tracking-normal text-gray-500 shadow-lg outline-none placeholder:text-sm placeholder:font-semibold placeholder:tracking-normal placeholder:text-gray-400"
        placeholder="How can I help you ? "
      ></textarea>
      <span className="flex-placecenter h-10 w-10 rounded-md bg-blue-500 shadow-md">
        <FontAwesomeIcon icon={faEnvelope} className="text-md text-blue-50" />
      </span>
    </div>
  );
}

function ChatText({ user = false, text }) {
  return (
    <div
      className={`flex w-full items-center ${user ? "justify-end" : "justify-start"}`}
    >
      <div className="flex-start max-w-[90%] items-end gap-1 rounded-md">
        {!user && (
          <span className="flex-placecenter h-7 w-7 rounded-full bg-blue-400 p-1 shadow-md">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-md font-bold text-white"
            />
          </span>
        )}
        <p
          className={`max-w-full rounded-md px-2 py-1 text-sm font-semibold shadow-md ${user ? "bg-blue-400/90 text-blue-50" : " bg-gray-300/70 text-gray-500"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default ChatApp;
