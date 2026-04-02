import { Link } from "react-router-dom";

function Button_Action({ action, b_style, path, handler }) {
  return (
    <button
      type="submit"
      className={`flex-placecenter cursor-pointer rounded-full px-2 py-2 font-semibold tracking-tight shadow-md ${b_style} w-full text-[14px]`}
      onClick={handler? ()=> handler(path):null}
    >
      {action}
    </button>
  );
}

export default Button_Action;
