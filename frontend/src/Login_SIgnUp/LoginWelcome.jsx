import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function LoginWelcome({ children, image }) {
  return (
    <div className="max-w-250 grid-cols-2 justify-items-center rounded-md bg-sky-200/40 md:grid">
      <div className="flex max-w-120 flex-col items-center justify-center gap-y-4 justify-self-start px-5 py-5 shadow-xl md:w-full">
        {children}
      </div>
      <div className="flex-placecenter hidden max-w-100 p-2 md:block">
        <div className="h-full max-w-150">
          <img
            src={image}
            alt="images-cartoon"
            className="h-full w-full rounded-tl-[10%] rounded-bl-[50%] object-center"
          />
        </div>
      </div>
    </div>
  );
}

// function Terms_Conditions() {
//   return (
//     <div className="flex-placecenter w-full">
//       <p className="text-[12px] text-gray-400">
//         By continuing you agree to our{" "}
//       </p>
//       <Link className="text-[14px] tracking-tight text-gray-400 capitalize underline">
//         Terms & conditions
//       </Link>
//     </div>
//   );
// }

// function Overlay() {
//   return (
//     <div className="absolute top-0 right-0 bottom-0 left-0 -z-1 h-full w-full bg-gray-950/2"></div>
//   );
// }

// function GoBack() {
//   return (
//     <div className="flex-col-start w-full">
//       <Link className="flex-placecenter h-6 w-6 rounded-full bg-amber-50 p-1 shadow-md transition duration-300 hover:bg-red-300">
//         <FontAwesomeIcon
//           icon={faArrowLeft}
//           className="text-[14px] font-semibold text-gray-700"
//         />
//       </Link>
//     </div>
//   );
// }
// function Button_Action({ action, b_style }) {
//   return (
//     <button
//       className={`flex-placecenter cursor-pointer rounded-full px-2 py-2 font-semibold tracking-tight shadow-md ${b_style} w-full text-[14px]`}
//     >
//       {action}
//     </button>
//   );
// }

// function MainContent({ children }) {
//   return <div className="flex-placecenter w-full">{children}</div>;
// }

export default LoginWelcome;
