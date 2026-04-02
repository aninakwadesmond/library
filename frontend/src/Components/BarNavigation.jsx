import { LinkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

function BarNavigation() {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/");
  console.log(pathname, pathname.split("/")[currentPage.length - 1]);
  return (
    <div className="mt-5 flex w-full items-center justify-start gap-2">
      <Link
        to="/"
        className="text-[14px] tracking-tight text-gray-300 capitalize cursor-pointer"
      >
        Home
      </Link>
      /
      <Link className="text-[14px] font-semibold tracking-tight text-gray-500 capitalize">
        {pathname.split("/")[currentPage.length - 1]}
      </Link>
    </div>
  );
}

export default BarNavigation;
