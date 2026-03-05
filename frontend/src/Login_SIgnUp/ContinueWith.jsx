import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContinueWith() {
  return (
    <div className="flex-col-start mt-3 w-full gap-2">
      <p className="flex-placecenter relative w-full">
        <span className="h-px w-[60%] bg-gray-300"></span>
        <span className="absolute top-[10%] left-[50%] -translate-[50%] rounded-md bg-gray-100 p-1 text-[11px] text-gray-500">
          or continue with
        </span>
      </p>
      <div className="mt-2 grid w-full grid-cols-2 justify-items-center gap-3">
        <SocialMedia icon={faGoogle} text="google" />
        <SocialMedia icon={faFacebook} text="facebook" />
      </div>
    </div>
  );
}

function SocialMedia({ icon, text }) {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-1 rounded-md bg-white px-3 py-2 shadow-md">
      <FontAwesomeIcon icon={icon} className="text-[14px] font-bold" />
      <span className="text-[13px] font-semibold tracking-tight text-gray-500 capitalize">
        {text}
      </span>
    </div>
  );
}
export default ContinueWith;
