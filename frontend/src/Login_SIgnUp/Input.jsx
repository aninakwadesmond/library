import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({ icon, placeholder, type = "text" }) {
  return (
    <div className="relative w-full">
      <span className="flex-placecenter absolute top-[50%] left-[3%] -translate-y-[50%]">
        <FontAwesomeIcon
          icon={icon}
          className="text-[14px] font-bold text-gray-600"
        />
      </span>
      <input
        type={type}
        className="w-full rounded-md border border-gray-100 bg-white px-10 py-3 text-[15px] font-semibold tracking-normal text-gray-600 shadow-md outline-0 placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-tight placeholder:text-gray-300"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
