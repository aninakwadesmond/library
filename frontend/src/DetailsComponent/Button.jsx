import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Button({ icon, text, bg_color, text_style }) {
  const { currentBook } = useSelector((state) => state.details);
  const { formats } = currentBook;
  function getBookUrl(formats) {
    const downloadUrl =
      formats["application/octet-stream"] ||
      formats["application/epub+zip"] ||
      formats["text/html"] ||
      formats["application/x-mobipocket-ebook"];
    return downloadUrl;
  }
  return (
    <Link
      to={getBookUrl(formats)}
      download={true}
      className={`w-full rounded-md border-0 bg-none shadow outline-0 ${bg_color} flex-center cursor-pointer gap-1 py-1 md:w-auto md:px-5`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-sm capitalize ${text_style}`}
      />
      <span className={`text-sm font-semibold capitalize ${text_style}`}>
        {text}
      </span>
    </Link>
  );
}

export default Button;
