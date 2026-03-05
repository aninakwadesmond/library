import { Link } from "react-router-dom";

function Terms_Conditions() {
  return (
    <div className="flex-placecenter w-full">
      <p className="text-[12px] text-gray-400">
        By continuing you agree to our{" "}
      </p>
      <Link className="text-[14px] tracking-tight text-gray-400 capitalize underline">
        Terms & conditions
      </Link>
    </div>
  );
}

export default Terms_Conditions;
