import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faStar,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faBookOpen,
  faStairs,
} from "@fortawesome/free-solid-svg-icons";

function Chat() {
  return (
    <div className="absolute top-[1%] right-[5%] z-10 h-130 w-[90%] rounded-md bg-blue-50 shadow-lg md:w-100">
      <div className="relative h-full w-full">
        <div className="flex-col-start h-[40%] justify-start gap-1 rounded-md bg-linear-to-r from-blue-500 to-blue-600 px-4 py-4">
          <div className="flex-between w-full">
            <div className="flex-start gap-1">
              <h2 className="text-lg font-bold tracking-wide text-blue-100 uppercase">
                LibRoom
              </h2>
              <span className="flex-placecenter h-6 w-6 rounded-full bg-blue-500">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-[12px] font-bold text-blue-100"
                />
              </span>
            </div>
            <span className="flex-placebetween group cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className="text-lg font-bold text-gray-600 transition duration-300 group-hover:text-white"
              />
            </span>
          </div>
          <h3 className="text-lg font-semibold tracking-wide text-gray-600 capitalize">
            Welcome !
          </h3>
          <p className="tracking-noemal text-sm font-semibold text-gray-600">
            How can I help you !
          </p>
        </div>
        <Start_Conversation />
        {/* <Chat_image /> */}
        <div className="flex-col-start mt-18 max-h-60 w-full gap-3 overflow-hidden py-1">
          <div className="thin-y-scrollbar flex w-full flex-col items-start justify-start gap-y-4 overflow-auto">
            <YourConversation />
            <YourConversation />
            <YourConversation />
            <YourConversation />
          </div>
        </div>
      </div>
    </div>
  );
}
function YourConversation() {
  return (
    <div className="flex-col-start mx-auto w-[90%] cursor-pointer gap-1 rounded-md bg-white p-3 shadow-md">
      <h5 className="font-bold tracking-tight text-gray-600 capitalize">
        Your conversation
      </h5>
      <div className="flex-between w-full">
        <div className="flex-start items-start gap-1">
          <span className="flex-placecenter h-10 w-10 rounded-full bg-blue-600">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-lg font-bold text-white"
            />
          </span>
          <div className="start flex-col">
            <h4 className="text-sm font-bold tracking-tight text-gray-600 capitalize">
              LibRoom Virtual Assistant
            </h4>
            <div className="flex-start gap-1">
              <FontAwesomeIcon
                icon={faStairs}
                className="text-[11px] text-gray-400"
              />
              <span className="font-semibold tracking-tight text-gray-400 capitalize">
                Survey
              </span>
            </div>
            <p className="text-sm font-semibold tracking-tight text-gray-300">
              17h ago
            </p>
          </div>
        </div>
        <div className="flex-start gap-3">
          <span className="flex-placecenter h-6 w-6 rounded-full bg-red-400 text-center font-bold text-white">
            4
          </span>
          <span className="flex-placecenter h-6 w-6 rounded-full bg-gray-900 text-center">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-sm font-bold text-white"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function Chat_image() {
  return (
    <div className="flex-placecenter absolute bottom-10 left-[50%] h-40 w-full -translate-x-[50%]">
      <div className="h-[90%] w-[50%]">
        <img
          src="/images/image-0.jpg"
          alt="image-handler"
          className="h-full w-full rounded-md rounded-bl-4xl object-center"
        />
      </div>
    </div>
  );
}

function Start_Conversation() {
  return (
    <div className="flex-col-start absolute top-[40%] left-[50%] z-20 mx-auto w-[90%] -translate-[50%] gap-2 rounded-md bg-white p-3 shadow-lg">
      <p className="text-sm font-semibold tracking-normal text-gray-600">
        Start a conversation with our team of experts now!
      </p>
      <div className="flex-start gap-2">
        {Array.from({ length: 3 }, (_, i) => i).map((el) => (
          <FontAwesomeIcon
            icon={faUser}
            key={el}
            className="text-lg font-bold text-gray-950"
          />
        ))}
      </div>
      <button className="flex-placecenter w-full cursor-pointer rounded-md bg-linear-to-tr from-blue-600 to-blue-300 py-2 text-[11px] font-semibold tracking-normal text-blue-100 shadow-md">
        New conversation
      </button>
    </div>
  );
}

export default Chat;
