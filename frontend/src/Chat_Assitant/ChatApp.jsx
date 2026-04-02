import {
  faArrowDown,
  faArrowLeft,
  faBookOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { setChatHome, setChatRoom } from "../store/Feautures/ChatSlice";
import { ChatAppContext } from "../Context/ChatAppContext";
import { useContext, useEffect, useRef, useState } from "react";
import { server } from "../Axios/api";

function ChatApp() {
  const dispatch = useDispatch();
  function handleGoBackHome() {
    dispatch(setChatRoom(false));
    dispatch(setChatHome());
  }

  function handleDropChat() {
    dispatch(setChatRoom(false));
    dispatch(setChatHome());
  }

  const [prevConversation, setPreviousConversation] = useState([]);

  useEffect(() => {
    async function fetchPreviousChat() {
      try {
        const { data } = await server.get("/chat");
        setPreviousConversation(data[0]['chats'][0]);
        console.log("data value", data[0]['chats'][0]);
      } catch (error) {
        throw new Response(JSON.stringify(error?.message), { status: 400 });
      }
    }
    fetchPreviousChat();
  }, []);

  const [message, setMessage] = useState();
  const [currentText, setCurrentText] = useState();
  const [temporalMessage, setTemporalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    // if (chatContainerRef.current) {
    //   // chatContainerRef.current.scrollTo({
    //   //   top: chatContainerRef.current.scrollHeight,
    //   //   behavior: "smooth",
    //   // });
    //   // chatContainerRef.current.scrollTop =
    //   //   chatContainerRef.current.scrollHeight;
    // }
  }, [prevConversation, message]);

  useEffect(() => {
    async function AskGoogle() {
      try {
        setLoading(true);
        console.log('start messaging')
        const { data } = await server.post("/chat", {chats:{role: "user", message}, tagNumber: 1 });

      
        console.log('response', data)
        console.log('data messaging', data, data['chats'][0]); 

        setPreviousConversation(data['chats'][0]);
        setLoading(false);
      } catch (error) {
        console.log(error)
        throw new Response(JSON.stringify(error?.message), { status: 404 });
      }
    }
    if (!message) return;
    AskGoogle();
  }, [message]);

  function handleSetMessage(text) {
    setMessage(text);
  }
  return (
    <ChatAppContext.Provider
      value={{
        prevConversation,
        handleSetMessage,
        currentText,
        setCurrentText,
        setTemporalMessage,
        temporalMessage,
        loading,
        chatContainerRef,
        lastMessageRef,
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full w-screen bg-blue-200/50 z-30"></div>

      <div className="absolute top-[1%] right-[5%] h-130 w-[90%] rounded-md bg-mist-50 shadow-lg md:w-100 z-40">
        <div className="flex-between w-full rounded-t-md bg-linear-to-l from-blue-700 to-blue-400 px-2 py-5">
          <div className="flex-start gap-3">
            <span
              className="flex-placecenter h-6 w-6 cursor-pointer"
              onClick={handleGoBackHome}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-lg font-bold text-gray-950"
              />
            </span>
            <div className="flex-start gap-1">
              <p className="capiptalize font-bold tracking-tight text-gray-600">
                LibRoom
              </p>
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-md text-white"
              />
            </div>
            <p className="text-lg font-bold tracking-tight text-gray-700 capitalize">
              Chat Support
            </p>
          </div>
          <span
            className="flex-placecenter h-7 w-7 cursor-pointer"
            onClick={handleGoBackHome}
          >
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-md text-gray-900"
            />
          </span>
        </div>
        <ChatContent />
        <TextArea />
      </div>
    </ChatAppContext.Provider>
  );
}

function ChatContent() {
  const {
    prevConversation,
    currentText,
    temporalMessage,
    loading,
    chatContainerRef,
  } = useContext(ChatAppContext);

  console.log('prevConversation', prevConversation)
  return (
    <div
      className="flex h-90 w-full overflow-hidden bg-white"
      ref={chatContainerRef}
    >
      <div className="flex-col-start thin-y-scrollbar w-full justify-start gap-4 overflow-auto px-2 py-4">
        {prevConversation.map((conversation, index) => (
          <ChatText
            conversation={conversation}
            isLast={index === prevConversation.length - 2}
          />
        ))}

        {loading && (
          <>
            <ChatText
              conversation={{ role: "user", message: temporalMessage }}
            />
            <ChatText
              conversation={{ role: "model", message: "" }}
              spin={true}
            />
          </>
        )}

        {/* <ChatText text="🤣Hi,There I'm Libroom Assistant. How can I help You Today" />
        <ChatText user={true} text="what is synopsis ?" />
        <ChatText text="Synposis is in the neural, helps link neuron communicate" /> */}
      </div>
    </div>
  );
}

function TextArea() {
  const { handleSetMessage, currentText, setCurrentText, setTemporalMessage } =
    useContext(ChatAppContext);
  const [ableToSend, setAbleToSend] = useState("");

  function handleSendInput() {
    if (currentText.length < 3) return;
    handleSetMessage(currentText);
    setTemporalMessage(currentText);
    setCurrentText("");
  }

  useEffect(() => {
    if (!currentText) return;
    if (currentText.length > 4) {
      setAbleToSend(true);
    } else {
      setAbleToSend(false);
    }
  }, [currentText]);
  return (
    <div className="flex-between mt-2 w-full gap-3 px-3">
      <textarea
        name="textarea"
        id=""
        className="text-md s thin-y-scrollbar h-18 w-[87%] resize-none rounded-md border-0 bg-white p-2 font-semibold tracking-normal text-gray-500 shadow-lg outline-none placeholder:text-sm placeholder:font-semibold placeholder:tracking-normal placeholder:text-gray-400"
        placeholder="How can I help you ? "
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
      ></textarea>
      <span
        className="flex-placecenter h-10 w-10 rounded-md bg-blue-500 shadow-md"
        onClick={handleSendInput}
        style={{ backgroundColor: `${ableToSend ? "blue" : "silver"}` }}
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-md text-blue-50" />
      </span>
    </div>
  );
}

function ChatText({ conversation, spin = false, isLast }) {
  const {  role, message } = conversation;
  // console.log('chat use', chats )
  // const {role, message} = chats; 
  const { lastMessageRef } = useContext(ChatAppContext);
  return (
    <div
      className={`flex w-full items-center ${role === "user" ? "justify-end" : "justify-start"}`}
      ref={isLast ? lastMessageRef : null}
    >
      <div className={`flex-start max-w-[90%] items-end gap-1 rounded-md`}>
        {role === "model" && (
          <span
            className={`flex-placecenter h-7 w-7 rounded-full bg-blue-400 p-1 shadow-md ${spin ? "h-4 w-4 bg-gray-400 " : ""}`}
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              className={`text-md font-bold text-white ${spin ? "animate-spin text-sm" : ""}`}
            />
          </span>
        )}
        <p
          className={`max-w-full rounded-md px-2 py-1 text-sm font-semibold shadow-md ${role === "user" ? "bg-blue-400/90 text-blue-50" : " bg-gray-300/70 text-gray-500"} ${spin ? "h-2 w-50 animate-pulse" : ""}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatApp;
