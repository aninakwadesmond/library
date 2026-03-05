import { Link } from "react-router-dom";

function Button_Action({ action, b_style, path }) {
  return (
    <Link
      to={path}
      className={`flex-placecenter cursor-pointer rounded-full px-2 py-2 font-semibold tracking-tight shadow-md ${b_style} w-full text-[14px]`}
    >
      {action}
    </Link>
  );
}

export default Button_Action;
